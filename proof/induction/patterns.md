**Patterns**  

**Explore patterns in the sums** 1 ∙ 2 + 2 ∙ 3 + 3 ∙ 4 + ⋯+ ∙ ( + 1) **and so on. Use proof by** 

**induction to justify your conjecture.** ( ) = ∑ ∙ ( + 1) = ∑ ∙ ( + 1) 

=1

The pattern is expanded to reveal more patterns in it, 

1 ∙ 2 + 2 ∙ 3 + 3 ∙ 4 + ⋯+ ∙ ( + 1) ⟹ 1 ∙ (1 + 1) + 2 ∙ (2 + 1) + 3 ∙ (3 + 1) + ⋯+ ∙ ( + 1) ⟹  (12 + 1) + (22 + 2) + (32 + 3) + ⋯+ ( 2 + ) 

From here we separate the two sequences of  2 and  to get: 

(12 + 22 + 32 + ⋯+ 2) + (1 + 2 + 3 + ⋯+ ) 

From this we can see that the sum of n terms can be given by adding sums of   2 and   ⟹  ∑ 2 + ∑ . 

To test this, let’s consider n=3;  (3) = 1 ∙ 2 + 2 ∙ 3 + 3 ∙ 4 = 2 + 6 + 12 = 20. Now we run separate sums of  2 and  . 

- 2 ,( = 3) ⟹ 12 + 22 + 32 ⟹ 1 + 4 + 9 = 14 
- ,(  = 3) ⇒ 1 + 2 + 3 = 6 

Adding them together we get ∑ 2 + ∑ = 14 + 6 = 20. This holds for other numbers as well 



||∑|<p>2</p><p>∑</p>|∑|+ ∑|2|( ) |
| :- | - | - | - | - | - | - |
|1|1 |1||2||2|
|2 |3 |5||8||8|
|3 |6 |14||20||20|
|4|10 |30||40||40|
|5|15 |55||70||70|

The sum of the sequence 1 + 2 + 3 + ⋯+ is denoted by  

2 +

- =∑ = 

2 =1

It is proven to be true but we will give it a random test. When n=12. 

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = 78, Check if our function will yield the same result: 

122 + 12 144 + 12

- = 72 + 6 = 78,

2 2

We move on to another sequence 

The sum of the sequence 12 + 22 + 32 + ⋯+ 2 is given by 

2 3 + 3 2 +

- 2 = ∑ 2 = 

6

=1

More tests on this and the previous formula are shown in a table at page 4. 

We now get that the solution of  ( ) = ∑ + ∑ 2. We can actually sum the two functions to get 

2 + 2 3 + 3 2 +

( ) = ∑ + ∑ 2 ⟹ ∑ 2 + ⟹[ ] + [ ] ⟹ 

2 6

=1

3 2 + 3 + 2 3 + 3 2 + 2 3 + 6 2 + 4

⟹ ⟹ 

6 6

3 + 3 2 + 2

3

Now we have our equation for the pattern, time to prove it. We are going to prove it using **proof by induction** 

**Proof:** 

**Conjecture:** The sum of the pattern 1 ∙ 2 + 2 ∙ 3 + 3 ∙ 4 + ⋯+ ∙ ( + 1)  for n number of terms is given by*  

3 + 3 2 + 2

( ) =

3

**Base case:** 

( ) when  = 1, in other words does  (1) hold? 

- 1 ∙ 2 = 2 

13 + 3(1)2 + 2(1) 1 + 3 + 2 6

(1) = = = = 2, 3 3 3

**Induction:** 

Hypothesis: 

Assume  ( ) is true for some  

Induction step: 

Proof that the conjecture holds for some  ( + 1) 

( + 1)3 + 3( + 1)2 + 2( + 1)

( + 1) = ⟹

3

From the pattern we can also get  

( + 1) = ( ) + ( + 1) ∙ ( + 2) ⟹ since  ( ) = ( − 1) + ∙ ( + 1) i.e.,  (8) = (7) + 8 ∙ 9 Simplifying **equation 1,** 

( + 1)3 =  3 + 3 2 + 3 + 1 

3( + 1)2 = 3 2 + 6 + 3 

2( + 1) = 2 + 2 

The sum of the numerator becomes  3 + 6 2 + 11 + 6 so it becomes 

3 + 6 2 + 11 + 6 

`   `⟹

3

Simplifying **equation 2,**  

3 + 3 2 + 2

( ) =

3

3 + 3 2 + 2

( + 1) = + ( + 1) ∙ ( + 2) 

3

3 + 3 2 + 2 2 + 3 + 2 3 + 3 2 + 2 + 3 2 + 9 + 6 ( + 1) = + =

3 1 3

3 + 6 2 + 11 + 6

( + 1) = ⟹ 

3

We see that ***equation 1*** = ***equation 2*** 

**Conclusion:** 

For the pattern 1 ∙ 2 + 2 ∙ 3 + 3 ∙ 4 + ⋯+ ∙ ( + 1) denoted as 

- ∙ ( + 1) 

=1

The sum to a given number of terms is given by a function  

3 + 3 2 + 2 ( ) =

3

**Summary** 

The table bellow shows the summary and further proof that indeed the conjecture is water tight. **Table keys,** 

- ∙ ( + ) = 1 ∙ 2 + 2 ∙ 3 + 3 ∙ 4 + ⋯+ ∙ ( + 1) 

\=

- = 1 + 2 + 3 + ⋯+ 
- 2 = 12 + 22 + 32 + ⋯+ 2
- + ∑ =(1 + 2 + 3 + ⋯+ ) + (12 + 22 + 32 + ⋯+ 2) 

The colored columns are the different ways you can compute the sum of the sequence 

**Table** 

|***n*** |∑(n, i=1)  𝒊∙(𝒊+𝟏)|∑n|∑n²|∑n+∑n²|***n²*** |***n³*** |(n³+𝟑n²+𝟐𝒏)/3|
|:-:| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|**1** |2 |1 |1 |2 |1 |1 |2 |
|**2** |8 |3 |5 |8 |4 |8 |8 |
|**3** |20 |6 |14 |20 |9 |27 |20 |
|**4** |40 |10 |30|40 |16 |64 |40 |
|**5** |70 |15 |55 |70 |25 |125 |70 |
|**6** |112 |21 |91 |112 |36 |216 |112 |
|**7** |168 |28 |140 |168 |49 |343 |168 |
|**8** |240 |36 |204 |240 |64 |512 |240 |
|**9** |330 |45 |285 |330 |81 |729 |330 |
|**10** |440 |55 |385 |440 |100 |1000 |440 |
|**11** |572 |66 |506 |572 |121 |1331 |572 |
|**12** |728 |78 |650 |728 |144 |1728 |728 |
|**13** |910 |91 |819 |910 |169 |2197 |910 |
|**14** |1120 |105 |1015 |1120 |196 |2744 |1120 |
|**15** |1360 |120 |1240 |1360 |225 |3375 |1360 |
|**16** |1632 |136 |1496 |1632 |256 |4096 |1632 |
|**17** |1938 |153 |1785 |1938 |289 |4913 |1938 |
|**18** |2280 |171 |2109 |2280 |324 |5832 |2280 |
|**19** |2660 |190 |2470 |2660 |361 |6859 |2660 |
|**20** |3080 |210 |2870 |3080 |400 |8000 |3080 |
|**21** |3542 |231 |3311 |3542 |441 |9261 |3542 |
|**22** |4048 |253 |3795 |4048 |484 |10648 |4048 |
|**23** |4600 |276 |4324 |4600 |529 |12167 |4600 |
|**24** |5200 |300 |4900 |5200 |576 |13824 |5200 |
|**25** |5850 |325 |5525 |5850 |625 |15625 |5850 |
|**26** |6552 |351 |6201 |6552 |676 |17576 |6552 |
|**27** |7308 |378 |6930 |7308 |729 |19683 |7308 |
|**28** |8120 |406 |7714 |8120 |784 |21952 |8120 |
|**29** |8990 |435 |8555 |8990 |841 |24389 |8990 |
|**30** |9920 |465 |9455 |9920 |900 |27000 |9920 |
