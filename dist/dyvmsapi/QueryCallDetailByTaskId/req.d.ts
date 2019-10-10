interface QueryCallDetailByTaskIdRequest {
    "RegionId"?: string;
    /**
    * 机器人呼叫任务的唯一任务ID，成功下发机器人外呼任务后返回。可以在控制台[任务列表](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/task/list)中查看，或调用接口**BatchRobotSmartCall**成功后记录返回的参数**TaskId**。
    * @example `4001112222`
    */ "TaskId": string;
    /**
    * 机器人外呼任务的开始时间。Unix时间戳格式。
    * > 单位为毫秒。
    * @example `123456789000`
    */ "QueryDate": number;
    /**
    * 被叫号码。当前仅支持查看一个被叫号码的外呼记录。
    * @example `15900000000`
    */ "Callee": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { QueryCallDetailByTaskIdRequest };