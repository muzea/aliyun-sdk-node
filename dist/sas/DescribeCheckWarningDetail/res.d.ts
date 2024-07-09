export interface DescribeCheckWarningDetailResponse {
    /**
     * 基线检查风险项的加固建议。
     * @example `You can fix it in the following ways:↵1. To configure authentication for redis service, click the redis.conf Configure complex password in requirepass, and then restart redis.↵2. In redis configuration file redis.conf The configuration is as follows: bind 127.0.0.1, only allow local access, and then restart redis`
     */
    Advice: string;
    /**
     * 基线检查项的类型。
     * > 您可以调用[DescribeRiskType](~~DescribeRiskType~~)查看所有基线类型。
     * @example `Security audit`
     */
    Type: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
    /**
     * 基线检查风险项的补充描述内容。
     * @example `The redis port is open to the outside world and there is no authentication option configured. In addition to directly obtaining all the information in the database, unauthorized users can also attack the system through unauthorized access vulnerability.`
     */
    Description: string;
    /**
     * 检查项名称。
     * @example `Redis unauthorized access`
     */
    Item: string;
    /**
     * 检查项ID。
     * @example `946`
     */
    CheckId: number;
    /**
     * 检查项的风险等级。
     * - **high**：高，红色高亮显示，表示风险等级高
     * - **medium**：中，橙色高亮显示，表示风险等级为中等
     * - **low**：低，灰色高亮显示，表示风险等级低
     * @example `high`
     */
    Level: string;
    /**
     * 基线检查风险项的检查提示。
     * @example `weak passwords (username@host/password):root@****​/12***`
     */
    Prompt: string;
    /**
     * 检测内容详情。
     */
    CheckDetailColumns: {
        /**
         * 展示类型。取值：
         * - **grid**：检测网格
         * - **text**：文本
         * @example `text`
         */
        Type: string;
        /**
         * 检测内容的键。
         * @example `Containername`
         */
        Key: string;
        /**
         * 检测内容键对应展示名称。
         * @example `ContainerName`
         */
        ShowName: string;
        /**
         * 检测内容列表。
         */
        Grids: {
            /**
             * 展示类型。取值：
             * - **grid**：检测网格
             * - **text**：文本
             * @example `text`
             */
            Type: string;
            /**
             * 检测内容的键。
             * @example `Username`
             */
            Key: string;
            /**
             * 检测内容键对应展示名称。
             * @example `UserName`
             */
            ShowName: string;
        }[];
    }[];
    /**
     * 检查资产详情列表。
     */
    CheckDetailAssetInfo: any[];
}
