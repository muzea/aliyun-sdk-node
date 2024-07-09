export interface DescribeAttackAnalysisDataResponse {
    /**
     * 攻击事件列表。包含以下字段：
     * - **client_url** ：攻击请求URL
     * - **internetIp**：资产实例IP
     * - **instanceName**：资产实例名称
     * - **table_src**：数据来源
     * - **uuid**：资产实例的UUID
     * - **crack_method**：攻击请求方式
     * - **crack_hour**：攻击时间
     * - **crack_src\_ip**：攻击方IP
     * - **instanceId**：实例ID
     * - **dst_port**：被攻击端口
     * - **client_ip**：被攻击IP
     * - **location**：攻击方地域
     * - **aliuid**：阿里云账号ID
     * - **crack_cnt**：攻击次数
     * - **crack_type**：攻击类型。取值如下：
     *     - **113**：权限不当
     *     - **112**：重定向攻击
     *     - **upload**：上传漏洞
     *     - **other**：其他
     *     - **webshell**：脚本木马
     *     - **201**：异常连接攻击
     *     - **9**：SQLSERVER暴力破解
     *     - **5**：SSH暴力破解
     *     - **6**：RDP暴力破解
     *     - **lfi**：本地文件包含
     *     - **7**：代码执行攻击
     *     - **sqli**：SQL注入
     *     - **209**：Web攻击
     *     - **31**：缓冲器溢出攻击
     *     - **3**：MYSQL暴力破解
     *     - **30**：点击劫持
     *     - **4**：FTP暴力破解
     *     - **bypass**：越权访问
     *     - **33**：格式化字符串
     *     - **deeplearning**：其他
     *     - **32**：整数溢出攻击
     *     - **203**：暴力破解
     *     - **34**：条件竞争
     *     - **rfi**：远程文件包含
     *     - **0**：SQL注入攻击
     *     - **212**：挖矿行为
     *     - **213**：反弹Shell攻击
     *     - **211**：蠕虫病毒请求
     *     - **61**：超时攻击
     *     - **20**：路径穿越攻击
     *     - **xss**：XSS攻击
     *     - **22**：越权访问攻击
     *     - **21**：扫描攻击
     *     - **24**：文件修改攻击
     *     - **26**：文件删除攻击
     *     - **25**：文件读取攻击
     *     - **28**：CRLF注入攻击
     *     - **27**：逻辑错误
     *     - **29**：模板注入攻击
     *     - **csrf**：CSRF
     *     - **path**：路径遍历
     *     - **crlf**：CRLF
     *     - **102**：CSRF跨站请求伪造攻击
     *     - **103**：SSRF服务器端请求伪造攻击
     *     - **101**：XSS跨站脚本攻击
     *     - **11**：文件包含攻击
     *     - **10**：文件上传攻击
     *     - **12**：上传漏洞
     *     - **15**：未授权访问
     *     - **14**：信息泄露攻击
     *     - **17**：XML实体注入攻击
     *     - **16**：不安全的配置
     *     - **19**：LDAP注入攻击
     *     - **18**：XPath注入攻击
     *     - **codei**：代码执行
     * @example `[{\"crack_hour\":1662480000000,\"crack_cnt\":471},{\"crack_hour\":1662483600000,\"crack_cnt\":461},{\"crack_hour\":1662487200000,\"crack_cnt\":445},{\"crack_hour\":1662490800000,\"crack_cnt\":471},{\"crack_hour\":1662494400000,\"crack_cnt\":534},{\"crack_hour\":1662498000000,\"crack_cnt\":652},{\"crack_hour\":1662501600000,\"crack_cnt\":706},{\"crack_hour\":1662505200000,\"crack_cnt\":613},{\"crack_hour\":1662508800000,\"crack_cnt\":578},{\"crack_hour\":1662512400000,\"crack_cnt\":577},{\"crack_hour\":1662516000000,\"crack_cnt\":616},{\"crack_hour\":1662519600000,\"crack_cnt\":597},{\"crack_hour\":1662523200000,\"crack_cnt\":575},{\"crack_hour\":1662526800000,\"crack_cnt\":507}]`
     */
    Data: string;
    /**
     * 分页查询时，每页显示的攻击事件信息的数量。默认值为10，表示每页显示10条攻击事件信息。
     * @example `10`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4C1AE3F3-18FA-4108-BBB9-AFA1A032756C`
     */
    RequestId: string;
    /**
     * 查询到的已发生的攻击事件的总条数。
     * @example `1000`
     */
    Total: number;
    /**
     * 当前页的页码。
     * @example `1`
     */
    Page: number;
}
