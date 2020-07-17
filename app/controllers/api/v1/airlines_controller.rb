class Api::V1::AirlinesController < ApplicationController
    before_action :authenticate, only: [:create :upate :destroy]
    
    def index
        render json: serializer(airlines, options)
    end

    #GET /api/v1/:slug
    def show
        render json: serializer(airlines, options)
    end

    def create
        airline = Airline.new(airline_params)
        
        if airline.save
            render json: serializer(airline)
        else
            render json: errors(airline), status: 422
        end         
    end
    private

    def options
        @options ||= { include: %i[reviews] } 
    end

    def before_action
        @arline = Airline.find_by(slug:params[:slug])
    end
end
