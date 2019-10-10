interface CreateJobRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre `
    */ "RegionId"?: string;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName"?: string;
    /**
    * 作业类型：
    * FLINK_STREAM 流作业；
    * FLINK_BATCH 批作业；
    * @example `FLINK_STREAM`
    */ "jobType"?: string;
    /**
    * 创建作业的类型：
    * DATASTREAM，SQL
    * @example `SQL`
    */ "apiType"?: string;
    /**
    * SQL作业填写SQL代码，DataStream作业填写Foas上提交DataStream作业的相关参数
    * @example `code1`
    */ "code"?: string;
    /**
    * 执行计划
    * @example `{a:b}`
    */ "planJson"?: string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * 使用blink的版本
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
    * SQL作业运行的相关参数
    * @example `{k:v}`
    */ "properties"?: string;
    /**
    * jar包全名称，多个使用逗号分隔
    * @example `package1,package2`
    */ "packages"?: string;
    /**
    * 对作业相关描述备注
    * @example `test`
    */ "description"?: string;
    /**
    * 文件夹ID
    * @example `123`
    */ "folderId"?: number;
}
export { CreateJobRequest };