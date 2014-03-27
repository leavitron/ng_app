<?php
/**
 * @file
 * AngularJS block template.
 */
?>

<div ng-controller="ng_block_2Ctrl" ng-cloak>

  <div class="node {{ node.type }} clearfix" id="node-{{ node.nid }}" data-nid="{{ node.nid }}" ng-show="node">
    <h3 class="title" >CURRENTNODE: {{ node.title }}</h3>
    <h3 class="title" >{{ node.type}}</h3>

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

  <hr>

  <div ng-repeat="node in nodes" data-nid="{{node.nid}}" ng-click="getNode()">
    <h4>{{node.title}}</h4>
    {{node.body['und'][0].value}}
    <hr>
  </div>
</div>




