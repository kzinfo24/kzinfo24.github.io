var country = $.url().param('country');

if(country === 'UA' || country === 'MD') {

	var item		 	= $('.sec-3__item--3'),
		item_title	 	= item.find('.sec-3__title'),
		item_subtitle	= item.find('.sec-3__subtitle'),
		item_img_d		= item.find('.sec-3__img--d'),
		item_img_m		= item.find('.sec-3__img--m'),
		item_desc		= item.find('.sec-3__description'),
		item_btn		= item.find('.postland_comment');

	item_title.text('КОНЦЕРНТРАТ ЗДОРОВЬЯ PHYTOLIFE');
	item_subtitle.html('УСИЛИВАЕТ ДЕЙСТВИЕ</br> КРЕМА В 4 РАЗА!');
	item_img_d.attr('src', 'confirm/phytolife_d.png').css({'margin-top':'25px', 'margin-bottom':'20px'});
	item_img_m.attr('src', 'confirm/phytolife_m.png').css({'margin-top':'0', 'margin-bottom':'20px'});
	item_desc.html('<p class="sec-3__desc">На 87% очистит организм от шлаков и выведет токсины</p><p class="sec-3__desc">Активизирует иммунитет и защитные силы организма</p><p class="sec-3__desc">Эффективная детокс-программа в домашних условиях</p>')
	item_btn.data('comment', 'Заказ с постленда: КОНЦЕРНТРАТ ЗДОРОВЬЯ PHYTOLIFE').attr('onclick', 'yaCounter45051590.reachGoal("click_Phytolife"); return true;')

}

if (country === 'RU'){
    $('.price__cur').html('руб.');
    $('.new__price_val_1').html('590');
    $('.old__price_val_1').html('1960');
    $('.new__price_val_sauna').html('490');
    $('.old__price_val_sauna').html('1600');
    $('.new__price_val_3').html('280');
    $('.old__price_val_3').html('930');
}

if (country === 'KZ'){
    $('.price__cur').html('тнг.');
    $('.new__price_val_1').html('3200');
    $('.old__price_val_1').html('10600');
    $('.new__price_val_sauna').html('2700');
    $('.old__price_val_sauna').html('9000');
    $('.new__price_val_3').html('1550');
    $('.old__price_val_3').html('5185');
}

if (country === 'UA'){
    $('.price__cur').html('грн.');
    $('.new__price_val_1').html('260');
    $('.old__price_val_1').html('930');
    $('.new__price_val_sauna').html('220');
    $('.old__price_val_sauna').html('735');
    $('.new__price_val_3').html('318');
    $('.old__price_val_3').html('1060');
}

if (country === 'MD'){
    $('.price__cur').html('лей.');
    $('.new__price_val_1').html('180');
    $('.old__price_val_1').html('600');
    $('.new__price_val_sauna').html('150');
    $('.old__price_val_sauna').html('500');
    $('.new__price_val_3').html('225');
    $('.old__price_val_3').html('750');
}