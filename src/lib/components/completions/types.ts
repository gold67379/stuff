export interface Parameters {
    model: string,
    prompts: string[],
    suffix?: string,
    max_tokens?: number,
    temperature?: number,
    top_p?: number,
    n?: number,
    stream?: boolean,
    logprobs?: number,
    echo?: boolean,
    stop?: string[],
    presence_penalty?: number,
    frequency_penalty?: number,
    best_of?: number,
    logit_bias?: Record<string, number>,
}

export interface Chat {
    id: number,
    chat: string
}