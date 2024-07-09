export interface RecognizeTrainTicketResponse {
    /**
     * 请求ID。
     * @example `BE4B73EA-30A0-4573-A548-3A101B34641A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 票价。
         * @example `104.5`
         */
        Price: number;
        /**
         * 目的站点。
         * @example `南京南站`
         */
        Destination: string;
        /**
         * 始发站点。
         * @example `苏州站`
         */
        DepartureStation: string;
        /**
         * 乘车日期时间。
         * @example `2017年08月05日22：09开`
         */
        Date: string;
        /**
         * 车次号。
         * @example `G7350`
         */
        Number: string;
        /**
         * 座位车厢及座次号。
         * @example `04车13A号`
         */
        Seat: string;
        /**
         * 乘车人姓名。
         * @example `帅帅`
         */
        Name: string;
        /**
         * 座位席别。
         * @example `二等座`
         */
        Level: string;
    };
}
