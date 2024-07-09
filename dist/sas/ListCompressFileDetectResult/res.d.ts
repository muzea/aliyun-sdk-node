export interface ListCompressFileDetectResultResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E10BAF1C-A6C5-51E2-866C-76D5922E****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `55`
         */
        TotalCount: number;
    };
    /**
     * 压缩包内文件检测结果列表。
     */
    ResultList: {
        /**
         * 文件标识。
         * @example `0a212417e65c26ff133cfff28f6c****`
         */
        HashKey: string;
        /**
         * 文件检测结果。取值：
         * - **0**：安全文件
         * - **1**：可疑文件
         * - **3**：检测中，请等待
         * @example `0`
         */
        Result: number;
        /**
         * 文件检测分数。分数区间及危险等级的对应关系如下：
         * - 0~60：安全
         * - 61~70：风险
         * - 71~80：可疑
         * - 81~100：恶意
         * ><notice>分数越高，文件越可疑。></notice>
         * @example `100`
         */
        Score: number;
        /**
         * 病毒类型。取值：
         * - **Trojan**：自变异木马
         * - **WebShell**：网站后门
         * - **Backdoor**：后门程序
         * - **RansomWare**：勒索病毒
         * - **Scanner**：扫描器
         * - **Stealer**：窃密工具
         * - **Malbaseware**：被污染的基础软件
         * - **Hacktool**：黑客工具
         * - **Engtest**：引擎测试程序
         * - **Downloader**：下载器木马
         * - **Virus**：感染型病毒
         * - **Miner**：挖矿程序
         * - **Worm**：蠕虫病毒
         * - **DDoS**：DDOS木马
         * - **Malware**：恶意程序
         * - **Backdoor**：反弹shell后门
         * - **RiskWare**：风险软件
         * - **Proxytool**：代理工具
         * - **Suspicious**：可疑程序
         * - **MalScript**：恶意脚本
         * - **Rootkit**：Rootkit
         * - **Exploit**：漏洞利用程序
         * @example `WebShell`
         */
        VirusType: string;
        /**
         * 检测结果扩展信息。
         * @example `{
            "HighLight":
            [
                [
                    23245,
                    23212
                ]
            ],
            "FileLabel":
            [
                "PE32",
                "Zip",
                "SFX",
                "encrypted"
            ]
        }`
         */
        Ext: string;
        /**
         * 文件在压缩包内的路径。
         * @example `/root/1.zip/test****`
         */
        Path: string;
    }[];
}
