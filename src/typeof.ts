{  
    const account = {
        name: 'John Smith',
        age: 20,
        email: 'example.com',
        plan: 'Standard' as 'Standard' | 'Free' | 'Premium'
    }
    type Account = typeof account

    const greets = {
        en: 'Hello',
        ja: 'こんにちは'
    }
    type Language = keyof typeof greets

    const Position = {
        Top: 0,
        Right: 1,
        Bottom: 2,
        Left: 3,
      } as const;
    type Position = typeof Position[keyof typeof Position]

}