// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Виртуальная выставка \"Калык\"", "Виртуальная выставка Калык Краеведческая карта Глазовского района города Глазова ДондыДор ", "");
   return this;
}
