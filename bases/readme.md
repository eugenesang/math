# Base N numbers

Base n numbers tutorials and working

NUmber systems like `Binary`, `Octal`, `Decimal` and `hexadecimal` are relevant and we know them. Lets talk about other number systems.

Lets take a [YouTube Video](https://youtu.be/TvIc0IM6u48?si=3uYdLlKfVA-cbdpt) as an example:
It has an ID - `TvIc0IM6u48` lets find out what number this ID is.

The assumption we will make:

- When a new video is added after video `TvIc0IM6u48` it is given an ID `TvIc0IM6u49`

## Break down the problem

1. All usable characters - `0 1 2 3 4 5 6 7 8 9 a b c d e f g h j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`
2. The values are in that order where 0 = 0 and Z = 62
3. Get the values

| Character                 |T|v|I|c|0|I|M|6|u|4|8|
|---------------------------|-|-|-|-|-|-|-|-|-|-|-|
| Value       (v)           |54|30|43|12|0|43|47|6|29|4|8|
| index       (i)           |0|1|2|3|4|5|6|7|8|9|10|
| 62 power i  m = (62 ** i) |1|62|3844|238328|14776336|916132832|56800235584|3521614606208|218340105584896|13537086546263552|839299365868340200|
| calculation c = (v * m)   |54|1860|165292|2859936|0|39393711776|2669611072448|21129687637248|6331863061961984|54148346185054210|6714394926946722000|
| Sum     ∑c                |54|1914|167206|3027142|3027142|39396738918|2709007811366|23838695448614|6355701757410598|60504047942464810|6774898974889186000|
