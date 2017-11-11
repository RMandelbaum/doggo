1. Session login
  -wont display errors --instead renders new page or if blank says nil class
2. Adding a new walk
    --admin side: wont post new walk to the correct dog
3. Reserve Walk
  --Click reserve--shows up on users reserved walk page
  --Click unreserve -- I want it to delete from users page (change the user_id back to admin user id of 1??)
4. Scope Method 
-- change urgent page to a scope method


<!-- <input id="hidden" type="hidden" name="_method" value="patch">
  <input type="submit" value="Reserve Walk">
</form> -->



<!-- <form action="/rides/new" method="post">
     <%= #tag(:input, :type => "hidden", :name => request_forgery_protection_token.to_s, :value => form_authenticity_token) %>
     <%= #tag(:input, :type => "hidden", :name => :user_id, :value => current_user.id) %>
     <%= #tag(:input, :type => "hidden", :name => :attraction_id, :value => @attraction.id) %>
  <input type="submit" value="Go on this ride">
  </form> -->
