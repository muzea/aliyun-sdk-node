export interface DescribeCommonTargetConfigRequest {
    /**
     * 配置类型。取值：
     * - **kdump_switch**：主动防御优化体验
     * - **threat_detect**：自适应威胁检测能力
     * - **containerNetwork**：容器网络
     * - **interceptionSwitch**：集群微隔离
     * - **suspicious_aggregation**：告警关联
     * - **alidetect**：文件检测
     * - **USER-ENABLE-SWITCH-TYPE_38857**：Linux入口服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_50858**：Linux Web服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_50859**：Linux入口服务执行可疑操作
     * - **USER-ENABLE-SWITCH-TYPE_50862**：Linux云助手高级防护
     * - **USER-ENABLE-SWITCH-TYPE_50867**：Linux植入恶意文件
     * - **USER-ENABLE-SWITCH-TYPE_50868**：Linux植入可疑文件
     * - **USER-ENABLE-SWITCH-TYPE_64025**：Linux入口服务执行命令[增强模式]
     * - **USER-ENABLE-SWITCH-TYPE_51229**：Windows浏览器服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_51230**：Windows入口服务执行可疑操作
     * - **USER-ENABLE-SWITCH-TYPE_51232**：Windows系统进程执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_51233**：Windows Java服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_51234**：Windows Office组件执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_51235**：Windows Web服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_52820**：Windows植入恶意文件
     * - **USER-ENABLE-SWITCH-TYPE_52826**：Windows入口服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_55251**：Windows数据库服务执行高危操作
     * - **USER-ENABLE-SWITCH-TYPE_63725**：Windows入口服务植入可疑脚本/二进制文件
     * - **USER-ENABLE-SWITCH-TYPE_3277**：Linux可疑进程启动
     * - **USER-ENABLE-SWITCH-TYPE_50983**：Linux混淆命令
     * - **USER-ENABLE-SWITCH-TYPE_51200**：Linux命令行下载运行恶意文件
     * - **USER-ENABLE-SWITCH-TYPE_71131**：Linux入口服务执行可疑行为序列
     * - **USER-ENABLE-SWITCH-TYPE_51225**：Windows Powershell执行高危命令
     * - **USER-ENABLE-SWITCH-TYPE_51226**：Windows Powershell执行可疑命令
     * - **USER-ENABLE-SWITCH-TYPE_52821**：Windows可疑进程启动
     * - **USER-ENABLE-SWITCH-TYPE_57242**：Windows恶意命令执行
     * - **USER-ENABLE-SWITCH-TYPE_57340**：Windows命令行下载运行恶意文件
     * - **USER-ENABLE-SWITCH-TYPE_39659**：Windows敏感注册表项防护
     * - **USER-ENABLE-SWITCH-TYPE_52816**：Windows高危账号操纵行为
     * - **USER-ENABLE-SWITCH-TYPE_54365**：Windows创建服务自启动项
     * - **USER-ENABLE-SWITCH-TYPE_54366**：Windows创建高危自启动项
     * - **USER-ENABLE-SWITCH-TYPE_54367**：Windows创建计划任务自启动项
     * - **USER-ENABLE-SWITCH-TYPE_54368**：Windows创建注册表自启动项
     * - **USER-ENABLE-SWITCH-TYPE_54369**：Windows创建WMI自启动项
     * - **USER-ENABLE-SWITCH-TYPE_50869**：Linux越权执行高危命令
     * - **USER-ENABLE-SWITCH-TYPE_53272**：Linux利用内核漏洞提权
     * - **USER-ENABLE-SWITCH-TYPE_54395**：Linux越权读写敏感文件
     * - **USER-ENABLE-SWITCH-TYPE_57897**：Linux疑似提权行为
     * - **USER-ENABLE-SWITCH-TYPE_52825**：Windows越权执行高危命令
     * - **USER-ENABLE-SWITCH-TYPE_5507**：Linux恶意驱动
     * - **USER-ENABLE-SWITCH-TYPE_50876**：Linux对抗安全软件
     * - **USER-ENABLE-SWITCH-TYPE_53168**：Linux进程调试
     * - **USER-ENABLE-SWITCH-TYPE_54699**：Linux劫持动态链接库
     * - **USER-ENABLE-SWITCH-TYPE_62981**：Linux绕过安全监控
     * - **USER-ENABLE-SWITCH-TYPE_52815**：Windows加载高危驱动
     * - **USER-ENABLE-SWITCH-TYPE_52823**：Windows运行高危ARK工具
     * - **USER-ENABLE-SWITCH-TYPE_54373**：Windows对抗安全软件
     * - **USER-ENABLE-SWITCH-TYPE_54374**：Windows入侵痕迹清理
     * - **USER-ENABLE-SWITCH-TYPE_54265**：Linux劫持PAM模块
     * - **USER-ENABLE-SWITCH-TYPE_54953**：Linux HashDump攻击
     * - **USER-ENABLE-SWITCH-TYPE_54383**：Windows MimiKatz凭据窃取
     * - **USER-ENABLE-SWITCH-TYPE_54384**：Windows HashDump攻击
     * - **USER-ENABLE-SWITCH-TYPE_50861**：Linux信息探测
     * - **USER-ENABLE-SWITCH-TYPE_52818**：Windows信息探测
     * - **USER-ENABLE-SWITCH-TYPE_54034**：Linux内网扫描
     * - **USER-ENABLE-SWITCH-TYPE_51228**：Windows高危横向渗透工具
     * - **USER-ENABLE-SWITCH-TYPE_50870**：Linux反弹shell
     * - **USER-ENABLE-SWITCH-TYPE_50873**：WebShell执行命令
     * - **USER-ENABLE-SWITCH-TYPE_51236**：Windows反弹shell
     * - **USER-ENABLE-SWITCH-TYPE_50877**：Linux恶意程序通信
     * - **USER-ENABLE-SWITCH-TYPE_50884**：Linux可疑蠕虫脚本行为
     * - **USER-ENABLE-SWITCH-TYPE_50885**：Linux恶意脚本行为
     * - **USER-ENABLE-SWITCH-TYPE_51201**：Linux勒索病毒
     * - **USER-ENABLE-SWITCH-TYPE_51202**：Linux可疑勒索行为
     * - **USER-ENABLE-SWITCH-TYPE_52827**：Windows勒索病毒
     * - **USER-ENABLE-SWITCH-TYPE_52828**：Windows可疑勒索行为
     * - **USER-ENABLE-SWITCH-TYPE_52829**：Windows删除系统备份行为
     * @example `kdump_switch`
     */
    "Type": string;
}
