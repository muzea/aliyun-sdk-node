export interface GetAreaElecConstituteResponse {
    /**
     * 请求ID。
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 各企业的水电用电和碳排等数据。
         */
        water: any[];
        /**
         * 各企业的光电用电和碳排等数据。
         */
        light: any[];
        /**
         * 各企业的市电用电和碳排等数据。
         */
        urban: any[];
        /**
         * 各企业的风电用电和碳排等数据。
         */
        wind: any[];
        /**
         * 各企业的核电用电和碳排等数据。
         */
        nuclear: any[];
        /**
         * 各企业的可再生电用电和碳排等数据。
         */
        renewing: any[];
        /**
         * 各企业的零电用电和碳排等数据。
         */
        zero: any[];
    };
    /**
     * 请求返回 code，Success 代表请求成功，其他情况代表请求不成功，具体错误原因描述可通过 msg 查看。
     * @example `200`
     */
    code: string;
}
