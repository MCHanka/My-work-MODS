// JavaScript By MCHanka


proc(_doublejump, @p=player(),
    @id = import('doublejump.'.@p)
    if(@id){
        clear_task(@id)
        export('doublejump.'.@p, null)
        set_peffect(@p,8,0,0)
        set_pflight(@p,false)
        return(false)
    }
    @id = set_interval(100,closure(
        if(!ponline(@p)){
            clear_task()
            export('doublejump.'.@p, null)
        }else{
            set_peffect(@p,8,6,5)
            @pi = pinfo(@p)
            if(!entity_grounded(@pi[13])){
                #flying
               if(@pi[18]){
                    @v = entity_velocity(@pi[13])
                    #sprinting
               #    if(@pi[19]){
               #        @ve = _caculate_velocity_from_facing(pfacing(@p),1)
               #        @v['x'] = @ve['x']
               #        @v['z'] = @ve['z']
               #    }
                   @v['y'] = (@v['y'] + 2)
                    set_entity_velocity(@pi[13],@v)
                    set_pflight(@p,false)
                }
            }else{
                if(!phas_flight(@p)){
                    set_pflight(@p,true)
                }
            }
        }
    ))
    export('doublejump.'.@p, @id)
    return(true)
)