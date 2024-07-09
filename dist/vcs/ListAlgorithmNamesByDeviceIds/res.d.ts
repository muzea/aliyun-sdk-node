export interface ListAlgorithmNamesByDeviceIdsResponse {
    /**
     * 返回编码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回消息。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 设备国标编码。
         * @example `1101050001132700****`
         */
        GbId: string;
        /**
         * 算法名称集合
         */
        AlgorithmNames: string[];
    }[];
}
