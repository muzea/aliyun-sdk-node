export interface DescribeAttackAnalysisDataRequest {
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 攻击分析的详情。取值：
     * - **TOTAL**：攻击次数
     * - **TREND**：攻击趋势
     * - **PIE_CHART**：攻击类型分布
     * - **SOURCE_TOP**：攻击来源TOP 5
     * - **CLIENT_TOP**：被攻击资产TOP 5
     * - **DETAILS**：攻击详情列表
     * > 当Type取值为**DETAILS**时，分页参数为必填项。
     * @example `DETAILS`
     */
    "Type": string;
    /**
     * 攻击开始的时间戳，默认查询近7天。单位为秒。
     * > 开始时间只能为近40天。
     * @example `1644027670`
     */
    "StartTime": number;
    /**
     * 攻击结束的时间戳，单位为秒。
     * @example `1649040221`
     */
    "EndTime": number;
    /**
     * 攻击事件的筛选条件。
     * > crack_type字段类型说明
     * > - 3：MySQL暴力破解
     * > - 4：FTP暴力破解
     * > - 5：SSH暴力破解
     * > - 6：RDP暴力破解
     * > - 9：SQL Server暴力破解
     * > - 101：Java Struts2攻击拦截
     * > - 102：Redis攻击拦截
     * > - 103：中国蚁剑WebShell通信
     * > - 104：中国菜刀WebShell通信
     * > - 133：XISE WebShell通信
     * > - sqli：SQL注入
     * > - codei：代码执行
     * > - xss：XSS攻击
     * > - lfi：本地文件包含
     * > - rfi：远程文件包含
     * > - webshell：脚本木马
     * > - upload：上传漏洞
     * > - path：路径遍历
     * > - bypass：越权访问
     * > - csrf：CSRF
     * > - crlf：CRLF
     * > - other：其他
     * @example `{"crack_type":"9"}`
     */
    "Data"?: string;
    /**
     * 查询结果是否需要对**client_url**进行Base64编码。取值：
     * - **true**：需要
     * - **false**：不需要
     * @example `true`
     */
    "Base64"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。起始值为**1**。
     * > 当Type取值为**DETAILS**时，该参数为必填。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的攻击事件信息的数量。
     * > 当Type取值为**DETAILS**时，该参数为必填。
     * @example `10`
     */
    "PageSize"?: number;
}
