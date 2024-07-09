export interface DescribeCommonOverallConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6D9CDB47-6191-4415-BE63-7E8B12CD4FBE`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    OverallConfig: {
        /**
         * 配置类型。取值：
         * - **kdump_switch**：主动防御优化体验
         * - **threat_detect**：自适应威胁检测能力
         * - **suspicious_aggregation**：告警关联
         * - **alidetect**：文件检测
         * - **USER-ENABLE-SWITCH-TYPE_3277**：可疑进程启动
         * - **USER-ENABLE-SWITCH-TYPE_5507**：恶意驱动
         * - **USER-ENABLE-SWITCH-TYPE_38857**：入口服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_50858**：web服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_50859**：入口服务执行可疑操作
         * - **USER-ENABLE-SWITCH-TYPE_50861**：信息探测
         * - **USER-ENABLE-SWITCH-TYPE_50862**：云助手高级防护
         * - **USER-ENABLE-SWITCH-TYPE_50867**：植入恶意文件
         * - **USER-ENABLE-SWITCH-TYPE_50868**：植入可疑文件
         * - **USER-ENABLE-SWITCH-TYPE_50869**：越权执行高危命令
         * - **USER-ENABLE-SWITCH-TYPE_50870**：反弹shell
         * - **USER-ENABLE-SWITCH-TYPE_50873**：WebShell执行命令
         * - **USER-ENABLE-SWITCH-TYPE_50876**：对抗安全软件
         * - **USER-ENABLE-SWITCH-TYPE_50877**：恶意程序通信
         * - **USER-ENABLE-SWITCH-TYPE_50884**：可疑蠕虫脚本行为
         * - **USER-ENABLE-SWITCH-TYPE_50885**：恶意脚本行为
         * - **USER-ENABLE-SWITCH-TYPE_50983**：混淆命令
         * - **USER-ENABLE-SWITCH-TYPE_51200**：命令行下载运行恶意文件
         * - **USER-ENABLE-SWITCH-TYPE_51201**：勒索病毒
         * - **USER-ENABLE-SWITCH-TYPE_51202**：可疑勒索行为
         * - **USER-ENABLE-SWITCH-TYPE_53168**：进程调试
         * - **USER-ENABLE-SWITCH-TYPE_53272**：利用内核漏洞提权
         * - **USER-ENABLE-SWITCH-TYPE_54034**：内网扫描
         * - **USER-ENABLE-SWITCH-TYPE_54265**：劫持PAM模块
         * - **USER-ENABLE-SWITCH-TYPE_54395**：越权读写敏感文件
         * - **USER-ENABLE-SWITCH-TYPE_54699**：劫持动态链接库
         * - **USER-ENABLE-SWITCH-TYPE_54953**：HashDump攻击
         * - **USER-ENABLE-SWITCH-TYPE_57897**：疑似提权行为
         * - **USER-ENABLE-SWITCH-TYPE_62981**：绕过安全监控
         * - **USER-ENABLE-SWITCH-TYPE_64025**：入口服务执行命令[增强模式]
         * - **USER-ENABLE-SWITCH-TYPE_39659**：敏感注册表项防护
         * - **USER-ENABLE-SWITCH-TYPE_51225**：Powershell执行高危命令
         * - **USER-ENABLE-SWITCH-TYPE_51226**：Powershell执行可疑命令
         * - **USER-ENABLE-SWITCH-TYPE_51228**：高危横向渗透工具
         * - **USER-ENABLE-SWITCH-TYPE_51229**：浏览器服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_51230**：入口服务执行可疑操作
         * - **USER-ENABLE-SWITCH-TYPE_51232**：系统进程执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_51233**：Java服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_51234**：Office组件执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_51235**：Web服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_51236**：反弹shell
         * - **USER-ENABLE-SWITCH-TYPE_52815**：加载高危驱动
         * - **USER-ENABLE-SWITCH-TYPE_52816**：高危账号操纵行为
         * - **USER-ENABLE-SWITCH-TYPE_52818**：信息探测
         * - **USER-ENABLE-SWITCH-TYPE_52820**：植入恶意文件
         * - **USER-ENABLE-SWITCH-TYPE_52821**：可疑进程启动
         * - **USER-ENABLE-SWITCH-TYPE_52823**：运行高危ARK工具
         * - **USER-ENABLE-SWITCH-TYPE_52825**：越权执行高危命令
         * - **USER-ENABLE-SWITCH-TYPE_52826**：入口服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_52827**：勒索病毒
         * - **USER-ENABLE-SWITCH-TYPE_52828**：可疑勒索行为
         * - **USER-ENABLE-SWITCH-TYPE_52829**：删除系统备份行为
         * - **USER-ENABLE-SWITCH-TYPE_54168**：LSA安全权限服务防护
         * - **USER-ENABLE-SWITCH-TYPE_54365**：创建服务自启动项
         * - **USER-ENABLE-SWITCH-TYPE_54366**：创建高危自启动项
         * - **USER-ENABLE-SWITCH-TYPE_54367**：创建计划任务自启动项
         * - **USER-ENABLE-SWITCH-TYPE_54368**：创建注册表自启动项
         * - **USER-ENABLE-SWITCH-TYPE_54369**：创建WMI自启动项
         * - **USER-ENABLE-SWITCH-TYPE_54373**：对抗安全软件
         * - **USER-ENABLE-SWITCH-TYPE_54374**：入侵痕迹清理
         * - **USER-ENABLE-SWITCH-TYPE_54384**：HashDump攻击
         * - **USER-ENABLE-SWITCH-TYPE_55251**：数据库服务执行高危操作
         * - **USER-ENABLE-SWITCH-TYPE_57242**：恶意命令执行
         * - **USER-ENABLE-SWITCH-TYPE_57340**：命令行下载运行恶意文件
         * - **USER-ENABLE-SWITCH-TYPE_62357**：云助手服务信息探测
         * - **USER-ENABLE-SWITCH-TYPE_63725**：入口服务植入可疑脚本/二进制文件
         * @example `kdump_switch`
         */
        Type: string;
        /**
         * 开关。取值：
         * - **on**：开启
         * - **off**：关闭
         * @example `on`
         */
        Config: string;
    };
}
