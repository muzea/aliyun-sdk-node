export interface GetPartitionsHeatmapResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 分布式数据库的数据热点数据。返回JSON格式的文本。
     * @example `{
        "boundAxis": [
            {
                "bound": "A,B,C,D",
                "labels": [
                    "L1",
                    "L2",
                    "L3",
                    "L4"
                ],
                "rows": 3171
            },
            {
                "bound": "A,B,C,D",
                "labels": [
                    "L1",
                    "L2",
                    "L3",
                    "L4"
                ],
                "rows": 277128
            }
        ],
        "dataMap": {
            "READ_WRITTEN_ROWS": [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ]
        },
        "timeAxis": [
            1671701056070,
            1671701116551,
            1671701177020
        ]
    }`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D00DB161-FEF6-5428-B37A-8D29A4C2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
