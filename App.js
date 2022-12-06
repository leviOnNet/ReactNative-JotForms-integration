import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import PaperformEmbed from './forms';
import { WebView } from 'react-native-webview';
import Lightbox from 'react-native-lightbox-v2';

import Constants from 'expo-constants';

const htmlcode =`<script src="https://cdn01.jotfor.ms/static/prototype.forms.js?3.3.35813" type="text/javascript"></script>
<script src="https://cdn02.jotfor.ms/static/jotform.forms.js?3.3.35813" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/js/vendor/jquery-1.8.0.min.js?v=3.3.35813" type="text/javascript"></script>
<script defer src="https://cdn01.jotfor.ms/js/vendor/maskedinput.min.js?v=3.3.35813" type="text/javascript"></script>
<script defer src="https://cdn02.jotfor.ms/js/vendor/jquery.maskedinput.min.js?v=3.3.35813" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/js/vendor/math-processor.js?v=3.3.35813" type="text/javascript"></script>
<script type="text/javascript">	JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.newPaymentUI = true;

   JotForm.setCalculations([{"replaceText":"","readOnly":false,"newCalculationType":true,"useCommasForDecimals":false,"operands":"27","equation":"{27}","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_0_1663067444278","resultField":"35","decimalPlaces":"2","isError":false,"conditionId":"1663066609286","conditionTrue":false,"baseField":"27"}]);
   JotForm.setConditions([{"action":[{"id":"action_1663070087679","visibility":"Show","isError":false,"field":"17"},{"id":"action_1663070045665","visibility":"Show","isError":false,"field":"15"},{"id":"action_1663069940253","visibility":"Show","isError":false,"field":"16"}],"id":"1663070095955","index":"0","link":"All","priority":"0","terms":[{"id":"term_1663070030678","field":"9","operator":"equals","value":"FACE","isError":false},{"id":"term_1663069994383","field":"9","operator":"equals","value":"You & The Beauty Salon","isError":false},{"id":"term_1663069940253","field":"9","operator":"equals","value":"Medical Information","isError":false}],"type":"field"},{"action":[{"id":"action_1663070114270","visibility":"ShowMultiple","isError":false,"fields":["20","21"]}],"id":"1663068139216","index":"1","link":"Any","priority":"1","terms":[{"id":"term_0_1663070111897","field":"9","operator":"equals","value":"FACE","isError":false}],"type":"field"},{"action":[{"id":"action_1663068080731","visibility":"Show","isError":false,"field":"16"}],"id":"1663068111525","index":"2","link":"Any","priority":"2","terms":[{"id":"term_1663068080731","field":"9","operator":"equals","value":"You & The Beauty Salon","isError":false}],"type":"field"},{"action":[{"id":"action_1663068046100","visibility":"Show","isError":false,"field":"15"}],"id":"1663068071787","index":"3","link":"Any","priority":"3","terms":[{"id":"term_1663068046100","field":"9","operator":"equals","value":"Medical Information","isError":false}],"type":"field"},{"action":[{"id":"action_1663067997971","visibility":"Hide","isError":false,"field":"17"},{"id":"action_1663067985619","visibility":"Hide","isError":false,"field":"16"},{"id":"action_1663067946761","visibility":"Hide","isError":false,"field":"15"}],"id":"1663068008167","index":"4","link":"Any","priority":"4","terms":[{"id":"term_1663067946761","field":"9","operator":"isEmpty","value":"","isError":false}],"type":"field"},{"action":[{"replaceText":"","readOnly":false,"newCalculationType":true,"useCommasForDecimals":false,"operands":"27","equation":"{27}","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_0_1663067444278","resultField":"35","decimalPlaces":"2","isError":false,"conditionId":"1663066609286","conditionTrue":false,"baseField":"27"}],"id":"1663066609286","index":"5","link":"Any","priority":"5","terms":[{"id":"term_0_1663067444278","field":"27","operator":"isFilled","value":"","isError":false}],"type":"calculation"}]);	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";

	JotForm.init(function(){
	/*INIT-START*/
if (window.JotForm && JotForm.accessible) $('input_35').setAttribute('tabindex',0);
      JotForm.setPhoneMaskingValidator( 'input_6_full', '(###) ###-####' );
      setTimeout(function() {
          $('input_12').hint('ex: 23');
       }, 20);
if (window.JotForm && JotForm.accessible) $('input_16').setAttribute('tabindex',0);
      JotForm.setCustomHint( 'input_16', 'Type here...' );
if (window.JotForm && JotForm.accessible) $('input_22').setAttribute('tabindex',0);
      JotForm.alterTexts(undefined);
	/*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,{"name":"heading","qid":"1","text":"Client Details","type":"control_head"},null,null,{"description":"","name":"name","qid":"4","text":"Name","type":"control_fullname"},null,{"description":"","name":"phoneNumber","qid":"6","text":"Phone Number","type":"control_phone"},{"description":"","name":"address","qid":"7","text":"Address","type":"control_address"},null,{"description":"","name":"formulaSelection","qid":"9","text":"Formula selection","type":"control_checkbox"},null,{"description":"","name":"gender","qid":"11","text":"Gender","type":"control_radio"},{"description":"","name":"age","qid":"12","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"paymentMethod","qid":"13","subLabel":"","text":"Payment Method","type":"control_dropdown"},null,{"name":"medicalInformation","qid":"15","text":"Medical Information","type":"control_head"},{"description":"","name":"whatMedical","qid":"16","subLabel":"","text":"What Medical information do you have to report? ","type":"control_textarea"},{"description":"","name":"reminderOf","qid":"17","text":"REMINDER OF CONTRADICTIONS","type":"control_checkbox"},null,{"name":"youAnd","qid":"19","text":"You and the Beauty Institute","type":"control_head"},{"description":"","name":"face","qid":"20","text":"FACE","type":"control_checkbox"},{"description":"","name":"face21","qid":"21","text":"FACE","type":"control_checkbox"},{"description":"","name":"comments","qid":"22","subLabel":"","text":"Comments","type":"control_textbox"},null,{"description":"","name":"howOften","qid":"24","text":"How often do you visit salons?","type":"control_checkbox"},{"name":"pageBreak","qid":"25","text":"Page Break","type":"control_pagebreak"},null,{"description":"","name":"location","qid":"27","subLabel":"","text":"Location","type":"control_dropdown"},{"name":"divider28","qid":"28","text":"Divider","type":"control_divider"},null,null,null,null,null,{"name":"input34","qid":"34","text":"","type":"control_text"},{"description":"","name":"typeA","qid":"35","subLabel":"","text":"","type":"control_textbox"},{"name":"pageBreak36","qid":"36","text":"Page Break","type":"control_pagebreak"},{"name":"submit","qid":"37","text":"Submit","type":"control_button"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Client Details","type":"control_head"},null,null,{"description":"","name":"name","qid":"4","text":"Name","type":"control_fullname"},null,{"description":"","name":"phoneNumber","qid":"6","text":"Phone Number","type":"control_phone"},{"description":"","name":"address","qid":"7","text":"Address","type":"control_address"},null,{"description":"","name":"formulaSelection","qid":"9","text":"Formula selection","type":"control_checkbox"},null,{"description":"","name":"gender","qid":"11","text":"Gender","type":"control_radio"},{"description":"","name":"age","qid":"12","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"paymentMethod","qid":"13","subLabel":"","text":"Payment Method","type":"control_dropdown"},null,{"name":"medicalInformation","qid":"15","text":"Medical Information","type":"control_head"},{"description":"","name":"whatMedical","qid":"16","subLabel":"","text":"What Medical information do you have to report? ","type":"control_textarea"},{"description":"","name":"reminderOf","qid":"17","text":"REMINDER OF CONTRADICTIONS","type":"control_checkbox"},null,{"name":"youAnd","qid":"19","text":"You and the Beauty Institute","type":"control_head"},{"description":"","name":"face","qid":"20","text":"FACE","type":"control_checkbox"},{"description":"","name":"face21","qid":"21","text":"FACE","type":"control_checkbox"},{"description":"","name":"comments","qid":"22","subLabel":"","text":"Comments","type":"control_textbox"},null,{"description":"","name":"howOften","qid":"24","text":"How often do you visit salons?","type":"control_checkbox"},{"name":"pageBreak","qid":"25","text":"Page Break","type":"control_pagebreak"},null,{"description":"","name":"location","qid":"27","subLabel":"","text":"Location","type":"control_dropdown"},{"name":"divider28","qid":"28","text":"Divider","type":"control_divider"},null,null,null,null,null,{"name":"input34","qid":"34","text":"","type":"control_text"},{"description":"","name":"typeA","qid":"35","subLabel":"","text":"","type":"control_textbox"},{"name":"pageBreak36","qid":"36","text":"Page Break","type":"control_pagebreak"},{"name":"submit","qid":"37","text":"Submit","type":"control_button"}]);}, 20); 
</script>
<style type="text/css">@media print{.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}</style>
<link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?themeRevisionID=6310a6ad592c72439615db25"/>
<link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/css/styles/payment/payment_styles.css?3.3.35813" />
<link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_feature.css?3.3.35813" />
<style type="text/css" id="form-designer-style">
    /* Injected CSS Code */
.form-label.form-label-auto {
        
      display: block;
      float: none;
      text-align: left;
      width: 100%;
    
      }
    /* Injected CSS Code */
</style>

<form class="jotform-form" action="https://submit.jotform.com/submit/222543561287054/" method="post" name="form_222543561287054" id="222543561287054" accept-charset="utf-8" autocomplete="on">
  <input type="hidden" name="formID" value="222543561287054" />
  <input type="hidden" id="JWTContainer" value="" />
  <input type="hidden" id="cardinalOrderNumber" value="" />
  <div role="main" class="form-all">
    <style>
      .form-all:before { background: none;}
    </style>
    <ul class="form-section page-section">
      <li class="form-line" data-type="control_dropdown" id="id_27">
        <label class="form-label form-label-top form-label-auto" id="label_27" for="input_27"> Location </label>
        <div id="cid_27" class="form-input-wide" data-layout="half">
          <select class="form-dropdown" id="input_27" name="q27_location" style="width:310px" data-component="dropdown">
            <option value=""> Please Select </option>
            <option value="Hatfield - shop 1"> Hatfield - shop 1 </option>
            <option value="Centurion - shop 2"> Centurion - shop 2 </option>
            <option value="Central - shop 3"> Central - shop 3 </option>
          </select>
        </div>
      </li>
      <li id="cid_25" class="form-input-wide" data-type="control_pagebreak">
        <div class="form-pagebreak" data-component="pagebreak">
          <div class="form-pagebreak-back-container">
            <button id="form-pagebreak-back_25" type="button" class="form-pagebreak-back  jf-form-buttons" data-component="pagebreak-back">
              Back
            </button>
          </div>
          <div class="form-pagebreak-next-container">
            <button id="form-pagebreak-next_25" type="button" class="form-pagebreak-next  jf-form-buttons" data-component="pagebreak-next">
              Next
            </button>
          </div>
          <div style="clear:both" class="pageInfo form-sub-label" id="pageInfo_25">
          </div>
        </div>
      </li>
    </ul>
    <ul class="form-section page-section" style="display:none;">
      <li class="form-line" data-type="control_divider" id="id_28">
        <div id="cid_28" class="form-input-wide" data-layout="full">
          <div class="divider" aria-label="Divider" data-component="divider" style="border-bottom-width:1px;border-bottom-style:solid;border-color:#ecedf3;height:1px;margin-left:0px;margin-right:0px;margin-top:5px;margin-bottom:5px">
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_textbox" id="id_35">
        <label class="form-label form-label-top form-label-auto" id="label_35" for="input_35">  </label>
        <div id="cid_35" class="form-input-wide" data-layout="half">
          <input type="text" id="input_35" name="q35_typeA" data-type="input-textbox" class="form-readonly form-textbox" data-defaultvalue="" style="width:310px" size="310" value="" tabindex="-1" data-component="textbox" aria-labelledby="label_35" readonly="" />
        </div>
      </li>
      <li class="form-line" data-type="control_text" id="id_34">
        <div id="cid_34" class="form-input-wide" data-layout="full">
          <div id="text_34" class="form-html" data-component="text">
          </div>
        </div>
      </li>
      <li id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-large">
          <div class="header-text httal htvam">
            <h1 id="header_1" class="form-header" data-component="header">
              Client Details
            </h1>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_fullname" id="id_4">
        <label class="form-label form-label-top form-label-auto" id="label_4" for="first_4"> Name </label>
        <div id="cid_4" class="form-input-wide" data-layout="full">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container" style="vertical-align:top" data-input-type="first">
              <input type="text" id="first_4" name="q4_name[first]" class="form-textbox" data-defaultvalue="" autoComplete="section-input_4 given-name" size="10" value="" data-component="first" aria-labelledby="label_4 sublabel_4_first" />
              <label class="form-sub-label" for="first_4" id="sublabel_4_first" style="min-height:13px" aria-hidden="false"> First Name </label>
            </span>
            <span class="form-sub-label-container" style="vertical-align:top" data-input-type="last">
              <input type="text" id="last_4" name="q4_name[last]" class="form-textbox" data-defaultvalue="" autoComplete="section-input_4 family-name" size="15" value="" data-component="last" aria-labelledby="label_4 sublabel_4_last" />
              <label class="form-sub-label" for="last_4" id="sublabel_4_last" style="min-height:13px" aria-hidden="false"> Last Name </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_phone" id="id_6">
        <label class="form-label form-label-top form-label-auto" id="label_6" for="input_6_full"> Phone Number </label>
        <div id="cid_6" class="form-input-wide" data-layout="half">
          <span class="form-sub-label-container" style="vertical-align:top">
            <input type="tel" id="input_6_full" name="q6_phoneNumber[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[Fill Mask]" data-defaultvalue="" autoComplete="section-input_6 tel-national" style="width:310px" data-masked="true" value="" placeholder="(000) 000-0000" data-component="phone" aria-labelledby="label_6 sublabel_6_masked" />
            <label class="form-sub-label" for="input_6_full" id="sublabel_6_masked" style="min-height:13px" aria-hidden="false"> Please enter a valid phone number. </label>
          </span>
        </div>
      </li>
      <li class="form-line" data-type="control_radio" id="id_11">
        <label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> Gender </label>
        <div id="cid_11" class="form-input-wide" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_11" data-component="radio">
            <span class="form-radio-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="radio" aria-describedby="label_11" class="form-radio" id="input_11_0" name="q11_gender" value="Male" />
              <label id="label_input_11_0" for="input_11_0"> Male </label>
            </span>
            <span class="form-radio-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="radio" aria-describedby="label_11" class="form-radio" id="input_11_1" name="q11_gender" value="Female" />
              <label id="label_input_11_1" for="input_11_1"> Female </label>
            </span>
            <span class="form-radio-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="radio" aria-describedby="label_11" class="form-radio" id="input_11_2" name="q11_gender" value="Other" />
              <label id="label_input_11_2" for="input_11_2"> Other </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_number" id="id_12">
        <label class="form-label form-label-top form-label-auto" id="label_12" for="input_12"> Age </label>
        <div id="cid_12" class="form-input-wide" data-layout="half">
          <input type="number" id="input_12" name="q12_age" data-type="input-number" class=" form-number-input form-textbox" data-defaultvalue="" style="width:310px" size="310" value="" placeholder="ex: 23" data-component="number" aria-labelledby="label_12" step="any" />
        </div>
      </li>
      <li class="form-line" data-type="control_dropdown" id="id_13">
        <label class="form-label form-label-top form-label-auto" id="label_13" for="input_13"> Payment Method </label>
        <div id="cid_13" class="form-input-wide" data-layout="half">
          <select class="form-dropdown" id="input_13" name="q13_paymentMethod" style="width:310px" data-component="dropdown">
            <option value=""> Please Select </option>
            <option value="Debit Card"> Debit Card </option>
            <option value="Cash"> Cash </option>
          </select>
        </div>
      </li>
      <li class="form-line" data-type="control_address" id="id_7">
        <label class="form-label form-label-top form-label-auto" id="label_7" for="input_7_addr_line1"> Address </label>
        <div id="cid_7" class="form-input-wide" data-layout="full">
          <div summary="" class="form-address-table jsTest-addressField">
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-street-line jsTest-address-lineField">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_7_addr_line1" name="q7_address[addr_line1]" class="form-textbox form-address-line" data-defaultvalue="" autoComplete="section-input_7 address-line1" value="" data-component="address_line_1" aria-labelledby="label_7 sublabel_7_addr_line1" required="" />
                  <label class="form-sub-label" for="input_7_addr_line1" id="sublabel_7_addr_line1" style="min-height:13px" aria-hidden="false"> Street Address </label>
                </span>
              </span>
            </div>
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-street-line jsTest-address-lineField">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_7_addr_line2" name="q7_address[addr_line2]" class="form-textbox form-address-line" data-defaultvalue="" autoComplete="section-input_7 address-line2" value="" data-component="address_line_2" aria-labelledby="label_7 sublabel_7_addr_line2" />
                  <label class="form-sub-label" for="input_7_addr_line2" id="sublabel_7_addr_line2" style="min-height:13px" aria-hidden="false"> Street Address Line 2 </label>
                </span>
              </span>
            </div>
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-city-line jsTest-address-lineField ">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_7_city" name="q7_address[city]" class="form-textbox form-address-city" data-defaultvalue="" autoComplete="section-input_7 address-level2" value="" data-component="city" aria-labelledby="label_7 sublabel_7_city" required="" />
                  <label class="form-sub-label" for="input_7_city" id="sublabel_7_city" style="min-height:13px" aria-hidden="false"> City </label>
                </span>
              </span>
              <span class="form-address-line form-address-state-line jsTest-address-lineField ">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_7_state" name="q7_address[state]" class="form-textbox form-address-state" data-defaultvalue="" autoComplete="section-input_7 address-level1" value="" data-component="state" aria-labelledby="label_7 sublabel_7_state" required="" />
                  <label class="form-sub-label" for="input_7_state" id="sublabel_7_state" style="min-height:13px" aria-hidden="false"> State / Province </label>
                </span>
              </span>
            </div>
            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
              <span class="form-address-line form-address-zip-line jsTest-address-lineField ">
                <span class="form-sub-label-container" style="vertical-align:top">
                  <input type="text" id="input_7_postal" name="q7_address[postal]" class="form-textbox form-address-postal" data-defaultvalue="" autoComplete="section-input_7 postal-code" value="" data-component="zip" aria-labelledby="label_7 sublabel_7_postal" required="" />
                  <label class="form-sub-label" for="input_7_postal" id="sublabel_7_postal" style="min-height:13px" aria-hidden="false"> Postal / Zip Code </label>
                </span>
              </span>
            </div>
          </div>
        </div>
      </li>
      <li id="cid_36" class="form-input-wide" data-type="control_pagebreak">
        <div class="form-pagebreak" data-component="pagebreak">
          <div class="form-pagebreak-back-container">
            <button id="form-pagebreak-back_36" type="button" class="form-pagebreak-back  jf-form-buttons" data-component="pagebreak-back">
              Back
            </button>
          </div>
          <div class="form-pagebreak-next-container">
            <button id="form-pagebreak-next_36" type="button" class="form-pagebreak-next  jf-form-buttons" data-component="pagebreak-next">
              Next
            </button>
          </div>
          <div style="clear:both" class="pageInfo form-sub-label" id="pageInfo_36">
          </div>
        </div>
      </li>
    </ul>
    <ul class="form-section page-section" style="display:none;">
      <li class="form-line jf-required" data-type="control_checkbox" id="id_9">
        <label class="form-label form-label-top form-label-auto" id="label_9" for="input_9">
          Formula selection
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_9" class="form-input-wide jf-required" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_9" data-component="checkbox">
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_9" class="form-checkbox validate[required]" id="input_9_0" name="q9_formulaSelection[]" value="Medical Information" required="" />
              <label id="label_input_9_0" for="input_9_0"> Medical Information </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_9" class="form-checkbox validate[required]" id="input_9_1" name="q9_formulaSelection[]" value="You &amp; The Beauty Salon" required="" />
              <label id="label_input_9_1" for="input_9_1"> You & The Beauty Salon </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_9" class="form-checkbox validate[required]" id="input_9_2" name="q9_formulaSelection[]" value="FACE" required="" />
              <label id="label_input_9_2" for="input_9_2"> FACE </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_9" class="form-checkbox validate[required]" id="input_9_3" name="q9_formulaSelection[]" value="BODY" required="" />
              <label id="label_input_9_3" for="input_9_3"> BODY </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_9" class="form-checkbox validate[required]" id="input_9_4" name="q9_formulaSelection[]" value="HAIR REMOVAL" required="" />
              <label id="label_input_9_4" for="input_9_4"> HAIR REMOVAL </label>
            </span>
          </div>
        </div>
      </li>
      <li id="cid_15" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-default">
          <div class="header-text httac htvam">
            <h2 id="header_15" class="form-header" data-component="header">
              Medical Information
            </h2>
          </div>
        </div>
      </li>
      <li class="form-line form-field-hidden" style="display:none;" data-type="control_textarea" id="id_16">
        <label class="form-label form-label-top form-label-auto" id="label_16" for="input_16"> What Medical information do you have to report? </label>
        <div id="cid_16" class="form-input-wide" data-layout="full">
          <textarea id="input_16" class="form-textarea" name="q16_whatMedical" style="width:648px;height:100px" data-component="textarea" aria-labelledby="label_16"></textarea>
        </div>
      </li>
      <li class="form-line form-field-hidden" style="display:none;" data-type="control_checkbox" id="id_17">
        <label class="form-label form-label-top form-label-auto" id="label_17" for="input_17"> REMINDER OF CONTRADICTIONS </label>
        <div id="cid_17" class="form-input-wide" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_17" data-component="checkbox">
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_0" name="q17_reminderOf[]" value="None" />
              <label id="label_input_17_0" for="input_17_0"> None </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_1" name="q17_reminderOf[]" value="Pace-Marker, metal parts and subcutaneous implants." />
              <label id="label_input_17_1" for="input_17_1"> Pace-Marker, metal parts and subcutaneous implants. </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_2" name="q17_reminderOf[]" value="Wounds, eczema" />
              <label id="label_input_17_2" for="input_17_2"> Wounds, eczema </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_3" name="q17_reminderOf[]" value="Hematomas, consequent varicose veins" />
              <label id="label_input_17_3" for="input_17_3"> Hematomas, consequent varicose veins </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_4" name="q17_reminderOf[]" value="Pregnancy" />
              <label id="label_input_17_4" for="input_17_4"> Pregnancy </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_5" name="q17_reminderOf[]" value="Phlebitis" />
              <label id="label_input_17_5" for="input_17_5"> Phlebitis </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_6" name="q17_reminderOf[]" value="Cancer" />
              <label id="label_input_17_6" for="input_17_6"> Cancer </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_17" class="form-checkbox" id="input_17_7" name="q17_reminderOf[]" value="Severe Kidney dysfunction" />
              <label id="label_input_17_7" for="input_17_7"> Severe Kidney dysfunction </label>
            </span>
          </div>
        </div>
      </li>
      <li id="cid_19" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-default">
          <div class="header-text httac htvam">
            <h2 id="header_19" class="form-header" data-component="header">
              You and the Beauty Institute
            </h2>
          </div>
        </div>
      </li>
      <li class="form-line form-line-column form-col-1 form-field-hidden" style="display:none;" data-type="control_checkbox" id="id_21">
        <label class="form-label form-label-top" id="label_21" for="input_21"> FACE </label>
        <div id="cid_21" class="form-input-wide" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_21" data-component="checkbox">
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_21" class="form-checkbox" id="input_21_0" name="q21_face21[]" value="None" />
              <label id="label_input_21_0" for="input_21_0"> None </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_21" class="form-checkbox" id="input_21_1" name="q21_face21[]" value="Slimming treatment" />
              <label id="label_input_21_1" for="input_21_1"> Slimming treatment </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_21" class="form-checkbox" id="input_21_2" name="q21_face21[]" value="Firming treatment" />
              <label id="label_input_21_2" for="input_21_2"> Firming treatment </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_21" class="form-checkbox" id="input_21_3" name="q21_face21[]" value="Light legs treatment" />
              <label id="label_input_21_3" for="input_21_3"> Light legs treatment </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line form-line-column form-col-2 form-field-hidden" style="display:none;" data-type="control_checkbox" id="id_20">
        <label class="form-label form-label-top" id="label_20" for="input_20"> FACE </label>
        <div id="cid_20" class="form-input-wide" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_20" data-component="checkbox">
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_20" class="form-checkbox" id="input_20_0" name="q20_face[]" value="NONE" />
              <label id="label_input_20_0" for="input_20_0"> NONE </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_20" class="form-checkbox" id="input_20_1" name="q20_face[]" value="Skin Cleansing" />
              <label id="label_input_20_1" for="input_20_1"> Skin Cleansing </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_20" class="form-checkbox" id="input_20_2" name="q20_face[]" value="Anti-age treatment" />
              <label id="label_input_20_2" for="input_20_2"> Anti-age treatment </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_20" class="form-checkbox" id="input_20_3" name="q20_face[]" value="Firming treatement" />
              <label id="label_input_20_3" for="input_20_3"> Firming treatement </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_textbox" id="id_22">
        <label class="form-label form-label-top form-label-auto" id="label_22" for="input_22"> Comments </label>
        <div id="cid_22" class="form-input-wide" data-layout="half">
          <input type="text" id="input_22" name="q22_comments" data-type="input-textbox" class="form-textbox" data-defaultvalue="" style="width:310px" size="310" value="" data-component="textbox" aria-labelledby="label_22" />
        </div>
      </li>
      <li class="form-line" data-type="control_checkbox" id="id_24">
        <label class="form-label form-label-top form-label-auto" id="label_24" for="input_24"> How often do you visit salons? </label>
        <div id="cid_24" class="form-input-wide" data-layout="full">
          <div class="form-single-column" role="group" aria-labelledby="label_24" data-component="checkbox">
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_24" class="form-checkbox" id="input_24_0" name="q24_howOften[]" value="First time in institute" />
              <label id="label_input_24_0" for="input_24_0"> First time in institute </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_24" class="form-checkbox" id="input_24_1" name="q24_howOften[]" value="once a week" />
              <label id="label_input_24_1" for="input_24_1"> once a week </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_24" class="form-checkbox" id="input_24_2" name="q24_howOften[]" value="Several times/week" />
              <label id="label_input_24_2" for="input_24_2"> Several times/week </label>
            </span>
            <span class="form-checkbox-item" style="clear:left">
              <span class="dragger-item">
              </span>
              <input type="checkbox" aria-describedby="label_24" class="form-checkbox" id="input_24_3" name="q24_howOften[]" value="Once a month" />
              <label id="label_input_24_3" for="input_24_3"> Once a month </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_37">
        <div id="cid_37" class="form-input-wide" data-layout="full">
          <div data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
            <button id="input_37" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">
              Submit
            </button>
          </div>
        </div>
      </li>
      <li style="display:none">
        Should be Empty:
        <input type="text" name="website" value="" />
      </li>
    </ul>
  </div>
  <script>
  JotForm.showJotFormPowered = "new_footer";
  </script>
  <script>
  JotForm.poweredByText = "Powered by Jotform";
  </script>
  <input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="222543561287054" />
  <script type="text/javascript">
  var all_spc = document.querySelectorAll("form[id='222543561287054'] .si" + "mple" + "_spc");
for (var i = 0; i < all_spc.length; i++)
{
  all_spc[i].value = "222543561287054-222543561287054";
}
  </script>
  <div class="formFooter-heightMask">
  </div>
  <div class="formFooter f6 branding21">
    <div class="formFooter-wrapper formFooter-leftSide">
      
    </div>
    <div class="formFooter-wrapper formFooter-rightSide">
      <span class="formFooter-text">
       
      </span>
      
    </div>
  </div>
</form>
<script src="https://cdn.jotfor.ms//js/vendor/smoothscroll.min.js?v=3.3.35813"></script>
<script src="https://cdn.jotfor.ms//js/errorNavigation.js?v=3.3.35813"></script>`

export default function App(props)  {
 
  return (
    
      <WebView 
          style={styles.container1}
          source={{ html: htmlcode }} 
        />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  embed:{
    backgroundColor: '#0000'
  },
  container1:{
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});
