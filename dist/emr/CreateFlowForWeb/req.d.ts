interface CreateFlowForWebRequest {
    /**
    * 区域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目 ID
    * @example `FP-257A173659F59685`
    */ "ProjectId": string;
    /**
    * 工作流名称
    * @example `my_flow_demo`
    */ "Name": string;
    /**
    * 工作流描述
    * @example `这是一个创建工作流描述`
    */ "Description": string;
    /**
    * 开始调度时间开始时间, 长整型时间戳, 例如: System.currentTimeMillis(). 1. 必须小于EndSchedule 2. 当CronExpr不为空时, 此项必填
    * @example `1538017814000`
    */ "StartSchedule"?: number;
    /**
    * 调度失效时间, 长整型时间戳, 例如: System.currentTimeMillis().
    * @example `1538018814000`
    */ "EndSchedule"?: number;
    /**
    * 时间周期调度的cron表达式, 请参考https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm
    * @example `0 0 0-23/1 * * ?`
    */ "CronExpr"?: string;
    /**
    * 是否通过集群模板创建集群，ture 表示通过集群模板创建集群ClusterId应设置为集群模板 ID(CT-xxx)，否则为已有集群 ID（C-xxx）
    * @example `false`
    */ "CreateCluster"?: boolean;
    /**
    * 集群 ID
    * @example `C-A23BD131A862F184`
    */ "ClusterId"?: string;
    /**
    * 工作流运行所在的机器hostName, 支持master和gateway机器. hostname格式为emr-header-1.cluster-12345，可登陆机器用hostname命令查看对应的值.
    * @example `emr-header-1.cluster-123456`
    */ "HostName"?: string;
    /**
    * dag 图形信息, 参考示例
    * @example `{"nodes":[{"id":"48d474ea","index":0,"spmAnchorId":"0.0.0.i0.766645eb2cmNtQ","attribute":{"type":"START"},"shape":"startControlNode","type":"node","y":250,"size":"80*34","x":500},{"id":"7ba480b3","index":1,"spmAnchorId":"5176.8250060.0.i19.771e28d0IPNQGE","attribute":{"jobType":"SHELL","jobId":"FJ-7BE1062897B19D25","type":"JOB"},"config":{"hostName":""},"label":"fail_job","shape":"shellJobNode","type":"node","y":398.5,"size":"170*34","x":470.5},{"id":"33202d60","index":2,"spmAnchorId":"5176.8250060.0.i23.771e28d0IPNQGE","attribute":{"type":"END"},"shape":"endControlNode","type":"node","y":562.5,"size":"80*34","x":430.5}],"edges":[{"id":"28167ea0","index":3,"source":"48d474ea","sourceAnchor":0,"target":"7ba480b3","targetAnchor":0},{"id":"e8d5ff52","index":4,"source":"7ba480b3","sourceAnchor":1,"target":"33202d60","targetAnchor":0}]}`
    */ "Graph"?: string;
    /**
    * 报警通知配置, eventId目前支持EMR-210401001(工作流失败报警), EMR-110401002(工作流成功通知), EMR-110401015(工作流节点失败报警)
    * @example `{"items":[{"enable":true,"eventId":"EMR-210401001","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401015","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401002","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]}]}`
    */ "AlertConf"?: string;
    /**
    * 报警用户组信息
    * @example `已过期`
    */ "AlertUserGroupBizId"?: string;
    /**
    * 报警钉钉群信息
    * @example `已过期`
    */ "AlertDingDingGroupBizId"?: string;
    /**
    * 依赖的上游工作流列表，以逗号分隔。
    * @example `F-62ECFC6E1BF6EAD2,F-1E6528634E67B615,F-7E0A84332E9D9A89`
    */ "ParentFlowList"?: string;
    /**
    * 父目录ID，空则默认为 root 目录。
    * @example `FC-F2495319DA05CEE5`
    */ "ParentCategory"?: string;
}
export { CreateFlowForWebRequest };