interface DescribeAllVulnerabilitiesRequest {
    "RegionId"?: string;
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定查询特定任务ID的漏洞扫描结果。
    * @example `2018042307022680333`
    */ "ScanId"?: string;
    /**
    * 指定查询特定漏洞名称的检测结果。
    * @example `test`
    */ "Name"?: string;
    /**
    * 根据特定的搜索条件（资产名）查询漏洞扫描结果。
    * @example `***.***.net`
    */ "Search"?: string;
    /**
    * 指定返回结果的语言环境。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    /**
    * 指定查询特定威胁程度下漏洞结果。
    * - **3**：高危。表示可以直接被利用的漏洞，且利用难度较低。被攻击之后可能对网站或服务器的正常运行造成严重影响，或对用户财产及个人信息造成重大损失。
    * - **2**：中危。表示被利用之后，造成的影响较大，但直接利用难度较高的漏洞。或本身无法直接攻击，但能为进一步攻击造成便利的漏洞。
    * - **1**：低危。表示无法直接实现攻击，但提供的信息可能让攻击者更容易找到其他安全漏洞。
    * - **0**：信息。表示本身对网站安全没有直接影响，提供的信息可能为攻击者提供少量帮助，或可用于其他手段的攻击，如社工等。
    * @example `0`
    */ "Severity"?: number;
    /**
    * 指定查询特定漏洞状态的扫描结果。
    * - **0**：未处理
    * - **1**：已处理
    * - **2**：白名单
    * - **3**：忽略
    * @example `0`
    */ "Status"?: string;
    /**
    * 指定查询特定搜索条件（任务开始时间）下的漏洞扫描结果。
    * @example `11258600000`
    */ "BeginTime"?: number;
    /**
    * 指定查询特定任务结束时间下漏洞扫描结果
    * @example `11258400000`
    */ "EndTime"?: number;
    /**
    * 指定特定子任务ID的漏洞扫描结果。
    * @example `1111111`
    */ "TaskId"?: number;
    /**
    * 根据类别查询漏洞扫描结果。
    * @example `core`
    */ "Category"?: string;
    /**
    * 根据漏洞模块查询任务实例扫描结果。
    * @example `relation_domain`
    */ "Module"?: string;
    /**
    * 可检测的漏洞类型，包含以下类型：
    * - 1,"失效的身份认证"
    * - 2,"失效的访问控制"
    * - 3,"命令注入"
    * - 4,"跨站请求伪造"
    * - 5,"跨站点脚本（反射型）"
    * - 6,"跨站点脚本（存储型）"
    * - 7,"跨站点脚本（DOM型）"
    * - 8,"加密问题"
    * - 9,"拒绝服务"
    * - 10,"违反安全设计原则"
    * - 11,"HTTP响应CRLF注入"
    * - 12,"敏感信息泄露"
    * - 13,"缓冲区溢出"
    * - 14,"越权"
    * - 15,"代码执行"
    * - 16,"SQL注入"
    * - 17,"服务器端请求伪造"
    * - 18,"点击劫持"
    * - 19,"未验证的重定向"
    * - 20,"XML外部实体（XXE）"
    * - 21,"明文存储密码"
    * - 22,"钓鱼"
    * - 23,"恶意软件/木马"
    * - 24,"存在后门"
    * - 25,"业务逻辑错误"
    * - 26,"敏感信息明文存储"
    * - 27,"敏感信息明文传输"
    * - 28,"中间人攻击"
    * - 29,"目录遍历"
    * - 30,"文件包含"
    * - 31,"会话固定"
    * - 32,"时间竞争漏洞"
    * - 33,"类型混淆"
    * - 34,"命令执行"
    * - 35,"安全配置错误"
    * - 36,"不安全的反序列化"
    * - 37,"使用含有已知漏洞的组件"
    * - 38,"LDAP注入"
    * - 39,"不足的日志记录和监控"
    * - 40,"弱口令"
    * - 41,"文件上传漏洞"
    * @example `1`
    */ "VulType"?: number;
    /**
    * 指定返回结果当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 页大小
    * @example `20`
    */ "PageSize"?: number;
}
export { DescribeAllVulnerabilitiesRequest };