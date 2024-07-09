export interface DescribeWhiteBoardRecordingsRequest {
    /**
     * 白板应用唯一标识符。获取AppID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
    /**
     * 白板文档唯一标识符。获取DocKey，请参见[CreateWhiteBoard](~~204299~~)。
     * @example `4EZlwmRW0gDG****`
     */
    "DocKey": string;
    /**
     * 查询页码，参数为空默认查询第1页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示个数，参数为空默认显示个数为10。
     * @example `10`
     */
    "PageSize"?: number;
}
