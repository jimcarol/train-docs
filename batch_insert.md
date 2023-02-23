# The most compact version in PostgreSQL would be something like this:

```sql
with data(first_name, last_name, uid)  as (
   values
      ( 'John', 'Doe', '3sldkjfksjd'),
      ( 'Jane', 'Doe', 'adslkejkdsjfds')
) 
insert into users (first_name, last_name, uid) 
select d.first_name, d.last_name, d.uid
from data d
where not exists (select 1
                  from users u2
                  where u2.uid = d.uid);
```
# Which is pretty much equivalent to:

```sql
insert into users (first_name, last_name, uid) 
select d.first_name, d.last_name, d.uid
from (
   select 'John' as first_name, 'Doe' as last_name, '3sldkjfksjd' as uid
   union all
   select 'Jane', 'Doe', 'adslkejkdsjfds'
) as d
where not exists (select 1
                  from users u2
                  where u2.uid = d.uid);
```
