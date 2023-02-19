/**
 * less than 100 tickets ==> 100tk/ticket
 * More than 100 and less than tickets ==> first 100 ticket 100tk/ticket && then 90tk/ticket
 * More than 200 tickets ==> first 100 ticket 100tk/ticket && 100-200 tickets 90tk/ticket && 200++ tickets 70tk/ticket
 */

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const ticketPrice = first100Rate * ticketQuantity;
        return ticketPrice;
    } else if (ticketQuantity <= 200){
        const first100TicketPrice = 100*first100Rate;
        const restTicket = ticketQuantity - 100;
        const restTicketPrice = restTicket * second100Rate
        const ticketPrice = first100TicketPrice + restTicketPrice;
        return ticketPrice;
    } else if (ticketQuantity > 200){
        const first100TicketPrice = 100*first100Rate;
        const second100TicketPrice = 100*second100Rate;
        const restTicket = ticketQuantity - 200;
        const restTicketPrice = restTicket*restTicketRate;
        const ticketPrice = first100TicketPrice+second100TicketPrice+restTicketPrice;
        return ticketPrice;
    }
}

console.log(ticketPrice(201));