local function rotateLeft(barrel, amount)
    local result = barrel - amount

    if result < 0 then
        return 100 + result
    end

    if result == 100 then return 0 end

    return result
end

local function rotateRight(barrel, amount)
    local result = barrel + amount

    if result > 100 then
        return result - 100
    end

    if result == 100 then return 0 end

    return result
end

(
    function()
        local password = 0
        local barrel = 50

        for _, value in ipairs(arg) do
            if (value:find('L')) then
                local number = tonumber(value:sub(2, -1))

                barrel = rotateLeft(barrel, number)
            end

            if (value:find('R')) then
                local number = tonumber(value:sub(2, -1))

                barrel = rotateRight(barrel, number)
            end


            if barrel == 0 then
                password = password + 1
            end
        end

        print(password)
    end
)()
