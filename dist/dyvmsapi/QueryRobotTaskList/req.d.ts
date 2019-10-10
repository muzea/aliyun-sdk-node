interface QueryRobotTaskListRequest {
    "RegionId"?: string;
    /**
    * 主账号的ID，即UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 任务名称
    * @example `任务测试`
    */ "TaskName"?: string;
    /**
    * 任务状态，状态如下：INIT                         未开始
    * READY                    准备开始
    * DISPATCH               解析中
    * EXCUTING              执行中
    * MANUAL_STOP     手动暂停
    * SYSTEM_STOP      系统暂停
    * ARREARS_STOP    欠费暂停
    * CANCEL                 手动终止
    * SYSTEM_CANCEL 系统终止
    * FINISH                    已完成
    * @example `EXCUTING`
    */ "Status"?: string;
    /**
    * 任务创建日期，yyyy-MM-dd格式。
    * @example `2019-06-14`
    */ "Time"?: string;
    /**
    * 分页参数，每页个数
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 分页参数，第几页
    * @example `1`
    */ "PageNo"?: number;
}
export { QueryRobotTaskListRequest };