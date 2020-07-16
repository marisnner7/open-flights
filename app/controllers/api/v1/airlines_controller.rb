class Api::V1::AirlinesController < ApplicationController
    def index
        @airlines = Airline.all

        AirlineSerializer.new(airlines).serialized_json
    end

    def show
        @arline = Airline.find_by(slug:params[:slug])

        AirlineSerializer.new(airline).serialized_json

    end
end
