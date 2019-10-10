interface ModifyFlowForWebRequest {
    /**
    * 区域 ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目 ID。
    * @example `FP-257A173659F5****`
    */ "ProjectId": string;
    /**
    * 工作流 ID。
    * @example `F-7A39731FE719****`
    */ "Id": string;
    /**
    * 图形信息。
    * @example `{"nodes":[{"id":"48d474ea","index":0,"spmAnchorId":"0.0.0.i0.766645eb2cmNtQ","attribute":{"type":"START"},"shape":"startControlNode","type":"node","y":250,"size":"80*34","x":500},{"id":"7ba480b3","index":1,"spmAnchorId":"5176.8250060.0.i19.771e28d0IPNQGE","attribute":{"jobType":"SHELL","jobId":"FJ-7BE1062897B19D25","type":"JOB"},"config":{"hostName":""},"label":"fail_job","shape":"shellJobNode","type":"node","y":398.5,"size":"170*34","x":470.5},{"id":"33202d60","index":2,"spmAnchorId":"5176.8250060.0.i23.771e28d0IPNQGE","attribute":{"type":"END"},"shape":"endControlNode","type":"node","y":562.5,"size":"80*34","x":430.5}],"edges":[{"id":"28167ea0","index":3,"source":"48d474ea","sourceAnchor":0,"target":"7ba480b3","targetAnchor":0},{"id":"e8d5ff52","index":4,"source":"7ba480b3","sourceAnchor":1,"target":"33202d60","targetAnchor":0}]}`
    */ "Graph": string;
    /**
    * 工作流名称， 长度限制为 64 个字符 同一个项目中不允许重名。
    * @example `my_flow`
    */ "Name"?: string;
    /**
    * 工作流状态， 支持STOP_SCHEDULE、UNDER_SCHEDULE。
    * @example `STOP_SCHEDULE`
    */ "Status"?: string;
    /**
    * 工作流描述，长度限制为 256 个字符。
    * @example `这是一个工作流描述`
    */ "Description"?: string;
    /**
    * 是否周期调度。
    * @example `true`
    */ "Periodic"?: boolean;
    /**
    * 调度生效时间， 长整型时间戳， 例如：System.currentTimeMillis() 必须小于 EndSchedule；当 CronExpr 不为空时， 此项必填。
    * @example `1538017814000`
    */ "StartSchedule"?: number;
    /**
    * 调度失效时间，长整型时间戳，例如: System.currentTimeMillis()。
    * @example `1538018814000`
    */ "EndSchedule"?: number;
    /**
    * 时间周期调度的 cron 表达式，请参考  [A Cron Expressions](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm)。
    * @example `0 0 0-23/1 * * ?`
    */ "CronExpr"?: string;
    /**
    * 是否通过集群模板创建集群， true 表示通过集群模板创建集群， ClusterId 为集群模板 ID(CT-xxx)，否则为已有集群 ID（C-xxx）。
    * @example `false`
    */ "CreateCluster"?: boolean;
    /**
    * 集群 ID。
    * @example `A23BD131A862****`
    */ "ClusterId"?: string;
    /**
    * 指定运行的机器信息，格式为 emr-header-1.cluster-123456。
    * @example `emr-header-1.cluster-123456`
    */ "HostName"?: string;
    /**
    * 报警通知配置， eventId 目前支持 EMR-210401001(工作流失败报警)， EMR-110401002(工作流成功通知)，EMR-110401015(工作流节点失败报警)。
    * @example `{"items":[{"enable":true,"eventId":"EMR-210401001","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401015","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]},{"enable":true,"eventId":"EMR-110401002","alertUserGroupIdList":["AUG-b79bb29bb6e14ddd89674a242623851b"],"alertDingDingGroupList":["ADG-af1f9689d6194e2dbd89927d5c515172"]}]}`
    */ "AlertConf"?: string;
    /**
    * 报警用户组信息。
    * @example `已过期`
    */ "AlertUserGroupBizId"?: string;
    /**
    * 报警钉钉群信息。
    * @example `已过期`
    */ "AlertDingDingGroupBizId"?: string;
    /**
    * 依赖的父工作流列表。
    * @example `[F-123456]`
    */ "ParentFlowList"?: string;
    /**
    * 父目录 ID。
    * @example `FC-F2495319DA05****`
    */ "ParentCategory"?: string;
}
export { ModifyFlowForWebRequest };