export interface SaveReceiverDetailRequest {
    /**
     * 收件人列表ID
     * @example `34642`
     */
    "ReceiverId": string;
    /**
     * 内容， 每次限制500条记录
     * @example `[{"b":"birthday","e":"xxx@alibaba-inc.com","g":"gender","m":"mobile","n":"nickname","u":"name"}]`
     */
    "Detail": string;
}
