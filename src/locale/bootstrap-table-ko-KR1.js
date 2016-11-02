/**
 * Bootstrap Table Korean tanslation
 * Author Noname
 */
 
 (funtion ($) {
    'use strict';
   $.extend($.fn.bootstrapTable.defaults, {
      formatLoadingMessage: function() {
         return '데이터를 불러오는 중입니다...';
   },
   formatLoadingPerPage: function(pageNumber) {
      return '페이지당 ' + pageNumber + '개 데이터 출력';
   },
   formatShowingRows: function(pageFrom, pageTo, totalRaws) {
      return '전체 ' + totalRaws + '개 중 ' + pageFrom + '~' + pageTo + '번째 데이터 출력,';
   },
   formatSearch: function() {
      return '검색';
   }
   formatNoMatches: function() {
      return '조회된 데이터가 없습니다.';
   }
   formatRefresh: function() {
      return '새로 고침';
   }
   formatToggle: function() {
      return '전환';
   }
   formatColumms: function() {
      return '컬럼 필터링';
   }
  });
 }(jQuary));
