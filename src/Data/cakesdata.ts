export interface CakeInterface {
    id: string,
    name: string,
    img: string,
    price: number,
    counter?: number
}
export const CakesArray = [
    {
        id: "chocolate",
        name: "עוגת שוקולד",
        img: "https://www.theflavorbender.com/wp-content/uploads/2018/09/Classic-Chocolate-CakeFeatured2.jpg",
        price: 100,
    },
    {
        id: "orange",
        name: "עוגת תפוזים",
        img: "https://www.christinascucina.com/wp-content/uploads/2017/02/fullsizeoutput_d7df.jpeg",
        price: 140,
    },
    {
        id: "cheese",
        name: "עוגת גבינה",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUVGBUZGRgYGBgcGBgYGBgYGBUZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADMQAAIBAgQEAwcEAwEBAAAAAAECAAMRBBIhMQVBUWEicYEGEzKRocHwFEKx0RVS4WJy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREAAgICAgICAQUAAAAAAAAAAAECESExAxIiQTJRBBNhcYGR/9oADAMBAAIRAxEAPwD0p2gj1SIY6SBpAzdNGRk4khhMWvhWvptOmq4YXkTSHSPvQqOd4Y5R7HnNXE4FXB7wPH8NYsGU2sYfQrWsrbzGMpNuy8ejlOJ8JIRkUbzi6OAdKygg6MP5nr+JQatMXDU6TudBmlyneCosz+P8ML0gyi5Anm+PqMt0K6z3Fadly20mFxD2YpVWzMonO4+Vgea+z2DdqqZb7gnyntOHSygdpm8L4HTo/CBea4lICYk1kFk1jAstpILiGU7/ADk3OkGZwR3lWAfSrqxswt3l/ubbaiZdEyAxDKdCYnQqNUiRMDTiD87GT/yB/wBRIwOmXmIITyMoHED0ERxjnnDAurC0TLqTac37S8R92wN9GBmtmLbmcp7fUCUpkf7EfSDeMDSyZuJ9oOhmRieKu214Zw32VxFUXVCAebaCax9hsQov4D2vJps0TijkDVY7kwzBYwgiGYvhT0zldCP4+cjQ4dcyaL7YOq4TiswGs6Og85ThuEZbTo8MxAmsbM2zSUyYgyPLwZRJKKNFGA4W0gzy2r0lDSjMqYQOvilTeGPUE57i6BgbGBcIqTpmvh8Sr7EQDitA5lYcjOZ4f75Hstyt+s65WLJ4hrJZUo9WV8SQmgSu9p57gcQ61Li976/Oei4bEAko0xsfwYK5dRvE3ZfE0sM2MFVzICZcYPgkssuYwszlsUmJTeSVpNiLgZYsoVpdTgDJYg6QWjSLGwh70S1gJo4PCBB3lUKzJaiUNj0gb7zb4ry9ZiPvCWhxHWKMsQMyZaJLLRKllgggZasrxLo1syhipuL9ZPkZmqbm0qxVYbU4i4G4VR6SqhxZr6PeA45MxA5CQp4US8k0jZrZKylXAP2mKnDcrWmhSuuvzhdNQ0Es5B4WCrDYe0NWmJJEjhTeWRY3u4rES4LHyxUNSKcxil2WKKh9ib6i8odhzkg+XylWJpZluDLaogJTDI6zC4twIm5QmDNxh8O1nBy9Zu4DjdKqNGF+l9ZJVnDirUw7eNCR1E3eG8ZSoLaA9J0dfCI4sQDMk+ydPNmXwntCwywbGUfEHWTeuLazSxOGSkmp2HOcjjarO1l0HWQ8WwNN+IoOYlX+SQ85npwoNqTeJuCjkTIbZVGomJB5y1HnPtw2ovwsTNPAcOxTC4QW6lgt/IGKxmmjQqjAsRQq0hd1zCwJK628xv6yOH4tTP7hHGSBo6OhYCXZz1mVQx6HZhCVxK9RNUyCvHvr6TJaaOJe9zM1pMiokxGEUQmTNESBlimVAyaxoGXrsfKA0qfihyGV4ceIykiWwWqmssSnC3ogxLStNKJsHddDL8LtIYkWXz0kqS2Ai9jrAYjS0GCKZNXldiXEJElK0eTBjJHtFHigAArdZF6uXYxq6X2mViKxWXkeAjFZKgyuB6zmMf7NODnouQel4Zi8dA147kNiYOCZNgqcSx9DQ3YD1hSe3eJAsaYv5GHUeNo+5WXl6TftX6TNwfplJmIONVq7XdvD/qNBNRjdfCJetGlyAhmEwmc2QX/geZkOLWwMqnUccppYChUqfCunNjoo9ZvYXgyLq/iPT9v/AGHs4WygDsB0kM0jFsBw/DsljZXbnckAeQl9d3IIRlv8wJPElQrA7Eagbm8Bo0sihUV1ubltD8yTMJX2r1Xp5NoxVWEguAAzKT2uPnM3GcBSp4iqh7alVsG9OveaVMWFkZSeZOusuCG/ia58rCXFCZyR4FbZivzg2LpvT+FyfWdhjsOXWw0bkf7M8341xR6TlHBzj6jkR2m0JR0YSi1k67BscgvvaQfeSwT3pqeqiRfeEiojxgYmkAZky0WgyaysSSxoTCEjUx44qZi/dNESywHWWq8mwBHeCYmplFuZ2mjVKyE7IVDncAbCHLTgmCQKNd4erRdaBsrKRisvVhHKQoLB5IPJlJEpFkY/vIpHLFC2FGViKzJvtA62LRhvrNnEYbONZg4/g+XVZ0pozMLiaM3wzm8VScHxTpa2KKeEiBV6YqTOavRcX9nOjTZiJ0Ps5wnE4gghslO9s7a5j0Rf3ee0O4X7OUlZHr3IaxRBtY7F+vl8+k9Ew9JEQG4UAAA6Cy8gLbDsJxS53JuMGsbf0dK4aSk1vQPgPZ2jTUZi1RuZY6eijT+ZpZgoyqtv2i22sFGKUrdLMT1J11tL8OGsCyhTrpcEQc+2E/79C6VlhNRu/n1g1OqrXy3U7XN7x3K/usG5AEX846ov/o+v9QbbeASSQkpqP/Rk8rHfQSPuV6m//wBE/wAxe5P+w+R/uCbXr/GDp+xwluVu8ZUPe0mtHmWJ7bCSZulrQ/kmyAY7CZXtDwBMSlyAKi/A3O/Q9jNjP2EiXB5R2gyc3h6ZRQjCxUWI8pF95u4zChhcfF/MxKi2NjvL7dkKqIPICO5kAZm9lpFoMmDKgZakpEsISM24iSNiGtYy/RDCHOUZjtA8MM75m2lWJxGchRtNPD4ayiax8n+yIfiiVSgG2leVk7iW3yyLYi+k2M0U/rkvYmxhVOp0MFPDlfUyZwxT4TJcV6KsNV45AgKYg/uEIVr7GQ0MtyxSGeKIog95Uyg7wwsDBqlE8pqjNmVxHhSODoLzksfw56Z0Gk7s6bymvlYWtKFZn06WelSbZgi+nhEVHEVFNiQ4GljNAJZVXooH0lLr0teeHycHm5RdZej1Ic3ik0FYbH+HQZqhvYWAt21M0aStuxt23mJl584RhsWw39L6y4ylB5yTJKSwbJAJ+EX72kr9bD0mcMUDyIPb/sIoup/cb97f1LXMm6Rm4OrCSo3Nh35xM5EHYXN7n52hKsDoN+81TslqhhfeOSYj5xJfna0aJEB1jhRyEkXEi1QKL2hhbFlk8l94JxDABxmWwYfXsZUvECSfDp5ydHFXPMHpfT6zGP5HG8Jmj4pLZz1VSCQRYjlKwZtcYwpcZ1Go37iYIaaXYIISWoYOhl6GWiWXqZDGC6GSUyVQeEy/Rn7AMAtzeaf6srpA8ALA+c1KVNG5ia8aqJEnkgjZ5auFA1jNSttGFRtjNLFVki5EdHvvJpY7yTp0gToe6ympRB2lbI0dHI3joVi903WPF+rEeFDsm7ZYy1yeUtTKYnQcpJRU2HzSk4ULJM5Ekl23jUmJxBKx1lMIxKWNvzaDmcMl5M6ovCIxvrHJjGQ0Uhw0fOZC/XaIechwTKUmgynjWtrLqeM6zNvGZiNte0zlFpWmyk0/R0FOtfY3lvrOep1j5S4YpuRh+tJLKF+nbwzbWIpfeZScRIhlPFAyo88JYIlxyWSboCdhGSiBJF7xhUtK8Lth5VReiW1nN8XweRsw+Bjp2PSdGtaQxCq6FGAKnQzXxrBCtM5NHHWXI0yeJ4VqDlL3B1U9R/crTGMOv8xpouUJNWjoUMuEw6PE+ovNHD49G52PebRaMZRaDMNhd784z4NwbqY4r6gCHJiBOiKwYt5BKVZ1+KGJXRul4iVbeUvgBuNI8Csuen0kBmG8GbEtT31EenxVW0ItF1Y7DRWUbyiqwbaMaGfURJQKwugpFH6UxQv9QIo+wdWCVyyGW4XFk6NC6iZhrAmwbA3EMCsOZQRBzTIMjTr5N4QmKRtBE0NAOJ31g7S/FHxdpQTOGT8mdUVhECIo8YG8kYjImSMheJgMIg0e/wBohJooRMV5GMGPMQaQ0yQMkHlYMXrM3xReylJoOpYwiGUsUCNZiR1cyOsovGhvqzepHX4hblylrKeunaYdLFEc4UuLguRRVNCcXdkcfw8VVsdbaq3MTlsRgGRip3nZUKmsljaSVAbqM1jY8weUvhnGssJSlF4OGXuJalMHY2hL0d/y0pSi3SdVUCmpLJdSqOmoM1MNxIHRh6iZiIwloQHcWM1jOUTKXFCWjfVxa4NxIHFnaZNMsvO4mthip3m8ZqRzS43EtRM+8T8NTcbx3NtpBKpvKsgqLvT8oRSxofQ6S5ADvIVMGu40MQyfuxFBPcvFH1CzQDhYjiQdBKBRLSQQLCkIpxODz67R8JhAvnCl13lmWS5FpfZlY4Wb0EEBhPGXCle4+8z0YWsJwzxJnTHMUXkxrysPHzSbHRK+kUiSI5MBiMiG5RyZEGKwHiMbNBsViglrqxB5jlE2krYJN6CDG+UZHBFwQe8lGA0QiIitCh2MDHVo2kQEmULLTL0rEQiniIDLac53xpMq7QPiVs7W1ub/AD1kAT0EtxK+M+lvK0HsDr9Z6MX4o5msl6m3L5SxUBGloOlwL384Su2Yade8tEtUI07eUJwZHw7AyBFx2jUIaZafaNMMDZTlb0MKXKekCd81usoe6m4msZGEoUaLKeUZGaVUMT1hBxKdppZk4k84ilHvIoUIJ/Vco6LmMo9zYw+nTsLTOzRJeiNo8kRGZYAzlPbrMKSOpIsxBt0I0/iclwrjDBwjNmB+nrO/9p0Jw1QAX0F/K4uZ4zW8JuOR+s4Od1y1+1nfwLtxfwz02niVYaESzNPNMDxZx4gSGG4/udDg+PhvisNN78+km2gcTq88cVJzSe0IBsQbdZpUOII4uG0h2E4mpniv8oItUGWB4WKgi8i6Kw1FxIF4+eF+hUSRABYAAdpBDaSDR1a8BizRKdNYiJUpjugqy1h0jqZEGMra94WBIy2idZUFllMWmco5HeBsaNem14Oo31HlDMSmuvMCC6jlOyOkZJ+iai42/wC95ag0NpRm7wmheUiZLBag0jLR7mNYA7W7y5bi3MdZZCbWivUGWLvJMkaidRfaLRon2iD4sf66ef2gSq99bj7zQxL2qWsSCL35CG00W1wQe/5tN6TVnNbToAUvFDMq9DFDIWvoOTxMO2sMmdw6HyHsekPGIivIlohA/EqAek6MbBlIJ6abzwvjeEyMRzB/DPYvaDiGRMg3bRiNbDpPN+JHQ2sR9f8Ak5fyIdpJraO78WTjFp6ZyqHe1oOlRg1u8PellJ00I+V5UKYOmvnMG2tm2PRF8bZfiBHOXJxBk2JAIvpBhQVbjQg6k8/KKtY6DpYH0gmhUzZwvH3W12m7gvaRG0bQ9Zw6roI5Um1tDHSFR6hSxqtswhC1AZ5IOJsj2DFSNL7TdwftBUAsSGPL8EnrJE0vR6EHj5pyWD9pjpnTzsfsZtYbi9N9nAPQ6H6x2xUat495QriSDQTCi1nFtdpIAbiUHXzEnm5CO7YUXZpNDrB7y2kdRBsEgqpvY9BK3p38x23EtxSjQ9oytsfT5zpj8UYPDsHSnv0EuRtbbfnWJjyBtHCG/KUht2WO19OnOWW8P9xlGv5+CWBNug/LyjNsROnlHwlDOe3OQfU2m1g6ORR8zGNeMTFx+HuxA3XYTGes6nn5f3NypV8Z7mWthVYaj15zaL8TKWzE/wAoeeWKaf8AiR+CNKFaDuGrlOU7zRNplCrZ7wnF4qwBA3mL2X1ugvKOsqxByKWJ0AvMv9Y/QQXF4p2UqT4TFYurujC4liM5Y8yb2N7DynO4tC17EX522I7zosUSvLy6TFxYNte++l/lMZHZDWDCr09Dbt/2Z9ZCDoLzbqU9CPXtAq6cxIasNMy6yE7i3f8AuDmn31mrUBPISg4e/SHSJLlJAiKApse8ak5Iv00lz4Yyr3REl8X0xrl+0D1KAJubX3kU6D06S16ZiVbROMkilOLZbTqEDvLxiPDfp0gr1LDqZYNVDAaGRbWyrTZrYDj7oRdrr/qT/e06vh3GUqDezf6/11nmrgFgTrC6dXJsbMNjex9OkTodHqK1Aecmr7zgeHcfZTlYlrc+ZHn1nQYLj6OQt7MTazbn1ku0LqdFyl+HbUdJn0K1zD8NvF2TCg2udvKIDbeNW1sPzeTUjftYfczth8Uc0tlLCTC/nKSK8zb8/mWKPT0l0O/olT6S4HkZWq+LylgG5loykOinMCBc3heIxRCkHTlBEq2NxvBuK4/IjO37RoOp5CIpJ4skFvrfWSWuRMLhXEifi1vz5i830UMOv59JvFqjGaaZL9X2ii/SHqPlFKwZ5Bqf3P8AMKxPwrFFMJbOmGkUU4JiviX1iiiegj8n/Zk47c+X2mLU5+UUUxls6oaAqu484HW2PrFFJRMtgTbR6W8UUEEtE2lFSNFKMmUNKmiigIoqSSfB6n+Ioply6L4/kVU/jHn94/ENzFFMPaOheyvCfEIYvxxRRy2VHR33A2JWnc30nQ4TePFM1sUgupz8o1Tn5j+Iop6EPijkfyJDYS884opaE9k0+H1k3+0UUpE+yteflMf2i+Eef2iiiWy/Zj4Lf1+wnXcP+H0MUUuJnyGjFFFLMD//2Q==",
        price: 170,
    },
    {
        id: "apple",
        name: "עוגת תפוחים",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Polish-apple-cake-7ea9c95.jpg",
        price: 110,
    },

]
