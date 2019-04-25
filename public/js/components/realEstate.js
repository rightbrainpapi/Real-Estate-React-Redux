webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.cities = function (e) {
            if (_this.props.globalState.populateFormsData.cities != undefined) {
                var cities = _this.props.globalState.populateFormsData.cities;

                console.log(cities);
                return cities.map(function (item) {
                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        };

        _this.homeTypes = function (e) {
            if (_this.props.globalState.populateFormsData.homeTypes != undefined) {
                var homeTypes = _this.props.globalState.populateFormsData.homeTypes;

                console.log(homeTypes);
                return homeTypes.map(function (item) {
                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item
                    );
                });
            }
        };

        _this.bedrooms = function (e) {
            if (_this.props.globalState.populateFormsData.bedrooms != undefined) {
                var bedrooms = _this.props.globalState.populateFormsData.bedrooms;

                console.log(bedrooms);
                return bedrooms.map(function (item) {
                    return _react2.default.createElement(
                        'option',
                        { key: item, value: item },
                        item,
                        '+ BR'
                    );
                });
            }
        };

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Filter, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.populateAction();
        }

        //Dynamically creating city list choices


        //Dynamically creating homeType list choices

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'filter' },
                _react2.default.createElement(
                    'div',
                    { className: 'inside' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Filter'
                    ),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'City' },
                        'City'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'city', className: ' filters city', onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: 'All' },
                            'All'
                        ),
                        this.cities()
                    ),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'Home Type' },
                        'Home Type'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
                        _react2.default.createElement(
                            'option',
                            { value: 'All' },
                            'All Homes'
                        ),
                        this.homeTypes()
                    ),
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'Bedrooms' },
                        'Bedrooms'
                    ),
                    _react2.default.createElement(
                        'select',
                        { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
                        this.bedrooms()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters price' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Price'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'min_price', value: this.props.globalState.min_price, className: 'min-price', onChange: this.props.change }),
                        _react2.default.createElement('input', { type: 'text', name: 'max_price', value: this.props.globalState.max_price, className: 'max-price', onChange: this.props.change })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters floor-space' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            'Floor Space'
                        ),
                        _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', value: this.props.globalState.min_floor_space, className: 'min-floor-space', onChange: this.props.change }),
                        _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', value: this.props.globalState.max_floor_space, className: 'max-floor-space', onChange: this.props.change })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filters extras' },
                        _react2.default.createElement(
                            'span',
                            { className: 'title' },
                            ' Extras '
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Elevators'
                            ),
                            _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Finished Basement'
                            ),
                            _react2.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
                        ),
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'extras' },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Gym'
                            ),
                            _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' Huem\xE6n House Real Estate '
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopListings = function () {
      var listingsData = _this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return 'Sorry your filter did not match any listing';
      }

      return listingsData.map(function (listing, index) {
        //THIS IS THE BOX VIEW
        if (_this.props.globalState.view == 'box') {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '")' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        ' 05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'far fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'spam',
                  { className: 'price' },
                  '$',
                  listing.price,
                  ' / month '
                ),
                _react2.default.createElement(
                  'spam',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city,
                  ', ',
                  listing.state,
                  ' '
                )
              )
            )
          );
        } else {
          //THIS IS THE LONG VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '")' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        ' 05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'far fa-square' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fas fa-bed' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'spam',
                  { className: 'price' },
                  '$',
                  listing.price,
                  ' / month '
                ),
                _react2.default.createElement(
                  'spam',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city,
                  ', ',
                  listing.state,
                  ' '
                )
              )
            )
          );
        }
      });
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 Results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                ' Lowest Price '
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                ' Highest Price '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', onClick: this.props.changeView.bind(null, 'long') }),
              _react2.default.createElement('i', { className: 'fa fa-th', onClick: this.props.changeView.bind(null, 'box') })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ListingsData = [{
    address: '20-30 grand ave',
    city: 'Ridgewood',
    state: 'NY',
    rooms: 3,
    price: 2000,
    floorSpace: 3000,
    extras: ['elevators', 'gym'],
    homeType: 'Apartment',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

}, {
    address: '1090 Troy Ave',
    city: 'Brooklyn',
    state: 'NY',
    rooms: 1,
    price: 2500,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

}, {
    address: '25 Hardford St',
    city: 'Staten Island',
    state: 'NY',
    rooms: 5,
    price: 3000,
    floorSpace: 5000,
    extras: ['elevator', 'gym', 'laundry'],
    homeType: 'Duplex',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

}, {
    address: '755 Oakland Pl',
    city: 'Bronx',
    state: 'NY',
    rooms: 3,
    price: 2000,
    floorSpace: 2000,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

}, {
    address: '239 Queens Blvd',
    city: 'Queens',
    state: 'NY',
    rooms: 0,
    price: 1500,
    floorSpace: 1000,
    extras: ['elevator', 'gym'],
    homeType: 'Studio',
    image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

}, {
    address: '3900 Lexington',
    city: 'New York',
    state: 'NY',
    rooms: 4,
    price: 4000,
    floorSpace: 4000,
    extras: ['elevator', 'gym'],
    homeType: 'Room',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

}, {
    address: '201 Malcom X Blvd',
    city: 'New York',
    state: 'NY',
    rooms: 3,
    price: 3000,
    floorSpace: 300,
    extras: ['elevator', 'gym'],
    homeType: 'Apartment',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88mA3dkEUBima_ls4XwIpH_PPsedx-br0xqfnKHG94vVMKZQOqw'
}, {
    address: '500 Park Slope',
    city: 'Brooklyn',
    state: 'BK',
    rooms: 2,
    price: 4000,
    floorSpace: 4000,
    extras: ['elevator', 'gym'],
    homeType: 'Room',
    image: 'https://cdn.vox-cdn.com/thumbor/7H-UkG1HYA8_AWAXBEK-Sod5CvM=/0x0:3000x2161/1200x675/filters:focal(1364x1124:1844x1604)/cdn.vox-cdn.com/uploads/chorus_image/image/57382215/Michel_ArnaudRajiv__7.0.jpg'

}];

exports.default = ListingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.change = function (e) {
      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
        _this.filteredData();
      });
    };

    _this.changeView = function (viewName) {
      _this.setState({
        view: viewName
      });
    };

    _this.filteredData = function (e) {
      var newData = _this.state.listingsData.filter(function (item) {
        return item.price >= _this.state.min_price && item.price <= _this.state.max_price && item.floorSpace >= _this.state.min_floor_space && item.floorSpace <= _this.state.max_floor_space && item.rooms >= _this.state.bedrooms;
      });

      //if the state.city is not equal to 'All', filter to find only the particular city
      if (_this.state.city != 'All') {
        newData = newData.filter(function (item) {
          return item.city == _this.state.city;
        });
      }

      //if the state.homeType is not equal to 'All', filter to find only the particular city
      if (_this.state.homeType != 'All') {
        newData = newData.filter(function (item) {
          return item.homeType == _this.state.homeType;
        });
      }

      //if the state.homeType is not equal to 'All', filter to find only the particular city
      if (_this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      //if the state.homeType is not equal to 'All', filter to find only the particular city
      if (_this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      //if the state.homeType is not equal to 'All', filter to find only the particular city
      if (_this.state.search != '') {
        newData = newData.filter(function (item) {
          // make every item lower case and store it in city variable
          var city = item.city.toLowerCase();
          // take the text that was typed into the search field make it lower case  then story it to the variable searchText
          var searchText = _this.state.search.toLowerCase();
          // match the searchText with the spelling of all city. 
          var n = city.match(searchText);

          //if it matches then return the array
          if (n != null) {
            return true;
          }
        });
      }

      _this.setState({
        filteredData: newData
      });
    };

    _this.populateForms = function (e) {
      //----------------CITY
      var cities = _this.state.listingsData.map(function (item) {
        return item.city;
      });
      //Set removes any repeates and keeps only one instance of the city
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities)).sort(); //This creates an array using the data that is in the set

      //----------------HOMETYPES
      var homeTypes = _this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      //Set removes any repeates and keeps only one instance of the homeType
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes)).sort(); //This creates an array using the data that is in the set

      //----------------ROOMS
      var bedrooms = _this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      //Set removes any repeates and keeps only one instance of the room
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms)).sort(); //This creates an array using the data that is in the set

      _this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities

        }
      }, function () {
        console.log(_this.state);
      });
    };

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,

      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //Default sorting listings from lowest price t highest price.
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.listingsData)
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, {
            change: this.change,
            globalState: this.state,
            populateAction: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, {
            changeView: this.changeView,
            change: this.change,
            globalState: this.state,
            listingsData: this.state.filteredData
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);