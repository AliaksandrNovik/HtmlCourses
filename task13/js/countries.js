var CountrysH={};

// добавление информации о стране с хеш
function AddCountry(CountryName,CapitalName) {
	CountrysH[CountryName]=CapitalName;
}

// удаление страны из хеша по имени страны
function DeleteCountry(CountryName) {
	delete CountrysH[CountryName];
}

// получение информации о стране и возвращение строки с этой информацией или ошибкой
function GetCountryInfo(CountryName) {
	if ( CountryName in CountrysH )
		return 'страна: ' + CountryName + ' столица: ' + CountrysH[CountryName] ;
	else
		return 'нет информации о стране ' + CountryName + '!' ;
}

// вывод хеша в строку
function ListCountrys() {
	var Res="";
	for ( var CN in CountrysH )
		Res+='\n'+GetCountryInfo(CN);
	return Res;
}