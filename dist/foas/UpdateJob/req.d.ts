interface UpdateJobRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 作业名称
    * @example `job1`
    */ "jobName": string;
    /**
    * 作业执行计划
    * @example `{a:b}`
    */ "planJson"?: string;
    /**
    * 作业代码
    * @example `code`
    */ "code"?: string;
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
    * package名称
    * @example `package1.jar`
    */ "packages"?: string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * 作业备注描述
    * @example `test`
    */ "description"?: string;
    /**
    * 文件夹ID
    * @example `123`
    */ "folderId"?: number;
    /**
    * 作业运行配置参数
    * @example `k:v`
    */ "properties"?: string;
}
export { UpdateJobRequest };