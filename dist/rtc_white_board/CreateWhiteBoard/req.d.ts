export interface CreateWhiteBoardRequest {
    /**
     * 创建白板的用户ID（客户业务用户），由1~32位大小写字母、数字、下划线、短划线（-）组成。
     * @example `123456`
     */
    "UserId": string;
    /**
     * 白板应用唯一标识符。获取AppID，请参见[CreateApp](~~204234~~)。
     * @example `7mbj****`
     */
    "AppID": string;
}
