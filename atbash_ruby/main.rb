require 'pry'

class Atbash 

    def initialize input  
        @input = input
        encode 
    end 

    def encode 
        output = ""

        alphabet = ("a".."z").to_a

        @input.split("").each do |letter| 
            index = alphabet.index letter
            output << alphabet.reverse[index]
        end

        p output
    end 
end 


binding.pry 
