-sessions -login
  --won't display errors
  --if blank wont display errors but says nil class
-take a walk
  --click reserve--gets added to user reserved walks page
  --click unreserved -- doesn't change back and delete reserve walks from page 
-scope method
  -urgent_walk ??


--user profile page can't be edited
--user admin can create walks but user_id is always theirs
--creating walks for dog/3 gets posted to dog/1


<!-- <input id="hidden" type="hidden" name="_method" value="patch">
  <input type="submit" value="Reserve Walk">
</form> -->



<!-- <form action="/rides/new" method="post">
     <%= #tag(:input, :type => "hidden", :name => request_forgery_protection_token.to_s, :value => form_authenticity_token) %>
     <%= #tag(:input, :type => "hidden", :name => :user_id, :value => current_user.id) %>
     <%= #tag(:input, :type => "hidden", :name => :attraction_id, :value => @attraction.id) %>
  <input type="submit" value="Go on this ride">
  </form> -->
