require "pry"

class Robot

  def initialize rock, paper, scissors
    @name = make_name
    @creation_time = Time.new
    @boot_time = Time.new
    @counter = 0
    @stats = {
      :paper => rock,
      :scissors => paper,
      :rock => scissors.to_i
    }
  end

  def make_name
    letters = ("A".."Z").to_a.sample(2).join
    numbers = (0..9).to_a.sample(3).join

    letters + numbers
  end

  def name
    @counter += 1
    @name
  end
  def boot_time
    @counter += 1
    @boot_time
  end
  def creation_time
    @counter += 1
    @creation_time
  end
  def stats
    @counter += 1
    @stats
  end

  def reset
    @counter += 1
    @name = make_name
    @boot_time = Time.now
  end

  def instruction_count
    @counter += 1
    @counter
  end

  def timers
    @counter += 1
    time_since_creation = Time.now - @creation_time
    time_since_boot = Time.now - @boot_time
    "#{time_since_creation} seconds since creation, #{time_since_boot} seconds since boot"
  end


end

def robot_battle r1, r2

  # p r1.name, r1.instruction_count, r1.timers
  # p r2.name, r2.instruction_count, r2.timers
  #
  # if r1.creation_time > r2.creation_time
  #   r2.reset
  # else
  #   r1.reset
  # end
  #
  # p r1.name, r1.instruction_count, r1.timers
  # p r2.name, r2.instruction_count, r2.timers

  p r1.name, r1.stats
  p r2.name, r2.stats

  until (r1.stats.values.include? 0) || (r2.stats.values.include? 0)

    if r1.stats[:rock] > r2.stats[:rock]
      r2.stats[:rock] = r2.stats[:rock] - 1
    else
      r1.stats[:rock] = r1.stats[:rock] - 1
    end
    if r1.stats[:paper] > r2.stats[:paper]
      r2.stats[:paper] = r2.stats[:paper] - 1
    else
      r1.stats[:paper] = r1.stats[:paper] - 1
    end
    if r1.stats[:scissors] > r2.stats[:scissors]
      r2.stats[:scissors] = r2.stats[:scissors] - 1
    else
      r1.stats[:scissors] = r1.stats[:scissors] - 1
    end



  end
  winner = (r1.stats.values.include? 0) ? r2 : r1
end


binding.pry








































# require 'pry'
#
# class Robot
#
#   # The initialize method will run as soon as an instance of the class has been created. it will store the variables that have been defined.
#   def initialize
#
#     @instruction_count = 0
#     @name = make_name
#
#     # we capture the current time with Time class.
#     @creation_date = Time.now
#     @boot_date = Time.now
#
#   end
#
#   # This function will create the random name for the robot.
#   def make_name
#
#     # incrementing the count for each action the robot makes
#     @instruction_count += 1
#
#     # creating an array with an alphabetical range from A to Z then 'samples' two random letters
#     letter_pool = ("A".."Z").to_a.sample(2)
#     # creating an array with a numerical range from 0 to 9 then 'samples' three random letters
#     number_pool = (0..9).to_a.sample(3)
#
#     # Concatinating the two arrays together then stripping it from the array.
#     join = letter_pool.concat( number_pool ).join
#
#   end
#
#   # this method will be able to call the name of the robot without resetting the name.
#   def name
#
#     @instruction_count += 1
#     @name
#
#   end
#
#   def reset
#
#     @instruction_count += 1
#     @name = make_name
#
#     # resetting the @boot_date variable
#     @boot_date = Time.now
#
#   end
#
#   # Timers - Give me the times since creation and last boot.
#   def timer
#
#     @instruction_count += 1
#
#     p "Unit has been active for #{ Time.now - @creation_date } seconds. #{ Time.now - @boot_date } since last boot cycle."
#
#   end
#
# end
#
# # creating a new instance of the Robot class.
# # Because we are using a class, we require the 'new' keyword.
# p1 = Robot.new
#
# binding.pry
#
# p p1.make_name
