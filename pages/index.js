import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page>
    <img src="/static/images/Group1165.png" style={{ width:'62.5%', right:'0px', position:'absolute' }}/>
    <h1 style={{ fontSize:'2em', fontWeight:'400', color: '#002C9A',top:'5.83%',left:'10.36%', position:'absolute' }}>Step into your</h1>
    <h1 style={{ fontSize:'2em', fontWeight:'400', color: '#002C9A',top:'10%', left:'10.36%', position:'absolute' }}>Hai flow</h1>
    <p style={{ fontSize:'0.9em', fontWeight:'300', color: '#002C9A',top:'14%', left:'10.36%', position:'absolute' }}>Elevate your experience with Hai&lsquo;s</p>
    <p style={{ fontSize:'0.9em', fontWeight:'300', color: '#002C9A',top:'17%', left:'10.36%', position:'absolute' }}>cutomizable shower head. Start here.</p>

    <div style={{ fontSize:'0.7em',position:'absolute',left: '40%',top: '30%'}}>
          Select your color
        <div class="selector-labels">
        <label class="orange_color_selector">
  <input type="radio" name="color" value="orange" />
  <div class="layer"></div>
  <div class="button"><span></span></div>
</label>

<label class="amber_color_selector">
  <input type="radio" name="color" value="amber" />
  <div class="layer"></div>
  <div class="button"><span></span></div>
</label>

<label class="lime_color_selector">
  <input type="radio" name="color" value="lime" />
  <div class="layer"></div>
  <div class="button"><span></span></div>
</label>

<label class="teal_color_selector">
  <input type="radio" name="color" value="teal" />
  <div class="layer"></div>
  <div class="button"><span></span></div>
</label>

<label class="blue_color_selector">
  <input type="radio" name="color" value="blue" />
  <div class="layer"></div>
  <div class="button"><span></span></div>
</label>

<label class="indigo_color_selector">
  <input type="radio" name="color" value="indigo" />
  <div class="layer"></div>
  <div class="button"><span></span></div>
</label>
          </div>
         
        </div>
  </Page>
);

export default Index;
