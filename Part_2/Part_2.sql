create database collage;

use collage;

create table teacher (
	id int primary key,
    name varchar(30),
    subject varchar(10),
    salary int
);

insert into teacher values
	(23,"ajay","Math",50000),
    (47,"Bharat","english",60000),
    (18,"Chetan","Chemistry",45000),
    (9,"Divya","physics",75000);
    
select * from teacher;

select name from teacher where salary>55000;

alter table teacher 
	change column salary
		ctc int default 15000;
        
update teacher
	set ctc=ctc+ctc*0.25;
    
alter table teacher
	add column city varchar(30) default "Gurgaon";
    
alter table teacher 
	drop column ctc;
    
    
create table student (
	rollno int primary key,
    name varchar(10),
    city varchar(20),
    marks int
);

insert into student values
	(110,"adam","Delhi",76),
    (108,"bob","Mumbai",65),
    (124,"casey","pune",94),
    (112,"duke","pune",80);
    
select * from student;

select name from student where marks>75;

select distinct city from student;
select city from student group by city;

select city,max(marks) from student group by city;

select avg(marks) from student;

alter table student 
	add column 
		grade varchar(2);
        
update student 
	set grade="o"
		where marks >=80;
        
update student
	set grade="A"
		where marks >=70 and marks<80;
        
update student
	set grade="B"
		where marks >=60 and marks<70;
select * from student;