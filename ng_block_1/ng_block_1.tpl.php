<?php
/**
 * @file
 * AngularJS block template.
 */
?>

<div ng-controller="ng_block_1Ctrl">

   <ul class="menu">
    <div ng-repeat="term in menuTree" ng-switch on="{{term.depth}}" class="leaf">
      <li data-tid="{{term.tid}}" ng-click="getTermNodes()" ng-switch-when="0">{{term.name}}</li>
      <li data-tid="{{term.tid}}" ng-click="getTermNodes()" ng-switch-when="1">• {{term.name}}</li>
      <li data-tid="{{term.tid}}" ng-click="getTermNodes()" ng-switch-when="2">• • {{term.name}}</li>
    </div>
   </ul>

  <div class="well node {{ node.type }} clearfix" id="node-{{ node.nid }}" data-nid="{{ node.nid }}" ng-show="node">
    <h3 class="title" >- {{ node.title }}</h3>
    <!--      <div class="content">-->
    <!--        <div class="field-thumbnail" ng-repeat="field in node.field_thumbnail[language]"><img class="field-field_image" alt="" src="{{ field['uri']  | drupalImage }}" width="{{ field['width'] }}" height="{{ field['height'] }}" /></div>-->
    <!--        <div class="body" ng-repeat="b in node.body[node.language]" ng-bind-html="b.value | trustAsHtml "></div>-->
    <!--        <div class="field-image" ng-repeat="field in node.field_image[node.language]"><img class="field-field_image" alt="" src="{{ field['uri']  | drupalImage }}" width="{{ field['width'] }}" height="{{ field['height'] }}" /></div>-->
    <!--        <ul class="gallery">-->
    <!--          <li ng-repeat="field in node.field_gallery['und']"><div class="field-image" ><img class="field-field_gallery" alt="" src="{{ field['uri']  | drupalImage }}" /></div></li>-->
    <!--        </ul>-->
    <!--        <div class="field-iframe" ng-repeat="field in node.field_iframe['und']"><iframe src="{{ node.field[language] }}" width="{{ field_width[language][0]['value'] }}" height="{{ field_height[language][0]['value'] }}" frameborder="0"></iframe></div>-->
    <!--      </div>-->
  </div>

    <div class="row swiper">
      <swipe id="{{settings.id}}" nav="top" callback="swiperCallBack" next="onNextSlide" prev="onPrevSlide">
        <div ng-repeat="node in nodes" class="swipe-item">
          <div class="icon glyphicon glyphicon-circle-arrow-down"></div>
          <!--<teaser ng-model="node"></teaser>-->
          <h3 class="title" >{{node.title}}</h3>
          <p>{{node.type}}</p>
          <p>{{node.nid}}</p>
        </div>
      </swipe>
    </div>



</div>





