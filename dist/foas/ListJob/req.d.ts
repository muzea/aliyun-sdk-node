interface ListJobRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * 分页属性，每页返回job数
    * @example `10`
    */ "pageSize"?: number;
    /**
    * 分页属性，第几页
    * @example `1`
    */ "pageIndex"?: number;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName"?: string;
    /**
    * 作业种类： FLINK_STREAM 流作业 FLINK_BATCH 批作业
    * @example `FLINK_STREAM`
    */ "jobType"?: string;
    /**
    * API类型：DATASTREAM；SQL
    * @example `SQL`
    */ "apiType"?: string;
    /**
    * 引擎版本
    * @example `blink_2.2.4`
    */ "engineVersion"?: string;
    /**
    * 集群ID
    * @example `d6wxwo5tnrmuamx2ly3m7vkz`
    */ "clusterId"?: string;
    /**
    * 队列名称
    * @example `root.default`
    */ "queueName"?: string;
    /**
    * 文件夹ID
    * @example `123`
    */ "folderId"?: number;
    "isShowFullField"?: boolean;
}
export { ListJobRequest };