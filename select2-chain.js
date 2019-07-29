/*
A Javascript library to using select2 as chain to another select2
*/
var Select2Chain = (function (window, $) {

	function Select2Chain(parent, child, url, select2Options) {
		var afterActions = [];
		var options = select2Options || {};

		this.then = function (callback) {
			afterActions.push(callback);
			return this;
		};

		parent.select2(select2Options).on("select2:select", function (e) {
			child.prop("disabled", true);
			child.select2();
			$.ajaxSetup({
				global: false
			});
			$.getJSON(url.replace(':parentId:', $(this).val()), function (items) {

				var newOptions = '<option value=""> Sedang menarik data . . .</option>';
				if (items.success) {
					$.each(items.data, function (i, item) {
						newOptions += '<option value="' + item.id + '">' + item.name + '</option>';
					});
				}
				child.select2('destroy').html(newOptions).prop("disabled", false)
					.select2(options);

				afterActions.forEach(function (callback) {
					callback(parent, child, items);
				});
			});
			$.ajaxSetup({
				global: true
			});
		});

		parent.select2(select2Options).on("select2:unselecting", function (e) {

			var newOptions = '<option value="">-- Pilih --</option>';
			child.select2('destroy').html(newOptions).prop("disabled", false)
				.select2(options);
			child.select2(select2Options).trigger({
				type: 'select2:unselecting'
			});
			child.select2(select2Options).trigger({
				type: 'change.select'
			});

		});
	}

	return Select2Chain;

})(window, $);