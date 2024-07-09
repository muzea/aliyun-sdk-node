import { SubmitSparkSQLRequest } from "./SubmitSparkSQL/req";
import { SubmitSparkSQLResponse } from "./SubmitSparkSQL/res";
import { SubmitSparkJobRequest } from "./SubmitSparkJob/req";
import { SubmitSparkJobResponse } from "./SubmitSparkJob/res";
import { GetJobStatusRequest } from "./GetJobStatus/req";
import { GetJobStatusResponse } from "./GetJobStatus/res";
import { GetJobDetailRequest } from "./GetJobDetail/req";
import { GetJobDetailResponse } from "./GetJobDetail/res";
import { GetJobLogRequest } from "./GetJobLog/req";
import { GetJobLogResponse } from "./GetJobLog/res";
import { GetJobAttemptLogRequest } from "./GetJobAttemptLog/req";
import { GetJobAttemptLogResponse } from "./GetJobAttemptLog/res";
import { KillSparkJobRequest } from "./KillSparkJob/req";
import { KillSparkJobResponse } from "./KillSparkJob/res";
import { ListSparkJobRequest } from "./ListSparkJob/req";
import { ListSparkJobResponse } from "./ListSparkJob/res";
import { ListSparkJobAttemptRequest } from "./ListSparkJobAttempt/req";
import { ListSparkJobAttemptResponse } from "./ListSparkJobAttempt/res";
import { ListSparkStatementsRequest } from "./ListSparkStatements/req";
import { ListSparkStatementsResponse } from "./ListSparkStatements/res";
import { GetSparkStatementRequest } from "./GetSparkStatement/req";
import { GetSparkStatementResponse } from "./GetSparkStatement/res";
import { ExecuteSparkStatementRequest } from "./ExecuteSparkStatement/req";
import { ExecuteSparkStatementResponse } from "./ExecuteSparkStatement/res";
import { CancelSparkStatementRequest } from "./CancelSparkStatement/req";
import { CancelSparkStatementResponse } from "./CancelSparkStatement/res";
import { GetSparkSessionStateRequest } from "./GetSparkSessionState/req";
import { GetSparkSessionStateResponse } from "./GetSparkSessionState/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { ReleaseInstanceRequest } from "./ReleaseInstance/req";
import { ReleaseInstanceResponse } from "./ReleaseInstance/res";
import { ValidateVirtualClusterNameRequest } from "./ValidateVirtualClusterName/req";
import { ValidateVirtualClusterNameResponse } from "./ValidateVirtualClusterName/res";

interface OPENANALYTICS_OPEN {
    /**
     * 提交SubmitSQL作业。
     */
    SubmitSparkSQL(query: SubmitSparkSQLRequest): Promise<SubmitSparkSQLResponse>;
    /**
     * 提交Spark作业。
     */
    SubmitSparkJob(query: SubmitSparkJobRequest): Promise<SubmitSparkJobResponse>;
    /**
     * 获取Spark作业的执行状态。
     */
    GetJobStatus(query: GetJobStatusRequest): Promise<GetJobStatusResponse>;
    /**
     * 调用GetJobDetail获取Spark作业的详细信息。
     */
    GetJobDetail(query: GetJobDetailRequest): Promise<GetJobDetailResponse>;
    /**
     * 获取Spark作业的日志。
     */
    GetJobLog(query: GetJobLogRequest): Promise<GetJobLogResponse>;
    /**
     * 获取对应JobAttempt的日志。
     */
    GetJobAttemptLog(query: GetJobAttemptLogRequest): Promise<GetJobAttemptLogResponse>;
    /**
     * 调用KillSparkJob强行停止一个运行中的Spark作业。
     */
    KillSparkJob(query: KillSparkJobRequest): Promise<KillSparkJobResponse>;
    /**
     * 分页提取某个数据湖分析Spark虚拟集群的历史作业详情信息。
     */
    ListSparkJob(query: ListSparkJobRequest): Promise<ListSparkJobResponse>;
    /**
     * 获取一个Job对应的所有JobAttempt信息。
     */
    ListSparkJobAttempt(query: ListSparkJobAttemptRequest): Promise<ListSparkJobAttemptResponse>;
    /**
     * 获取Spark Session的所有代码块的执行状态。
     */
    ListSparkStatements(query: ListSparkStatementsRequest): Promise<ListSparkStatementsResponse>;
    /**
     * 获取指定代码块的执行状态。
     */
    GetSparkStatement(query: GetSparkStatementRequest): Promise<GetSparkStatementResponse>;
    /**
     * 提交一段代码块给Spark作业执行。
     */
    ExecuteSparkStatement(query: ExecuteSparkStatementRequest): Promise<ExecuteSparkStatementResponse>;
    /**
     * 终止一个代码块的执行。
     */
    CancelSparkStatement(query: CancelSparkStatementRequest): Promise<CancelSparkStatementResponse>;
    /**
     * 获取可交互Spark作业的状态。
     */
    GetSparkSessionState(query: GetSparkSessionStateRequest): Promise<GetSparkSessionStateResponse>;
    /**
     * 调用CreateInstance创建实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 调用ReleaseInstance释放实例。
     */
    ReleaseInstance(query: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse>;
    /**
     * 调用ValidateVirtualClusterName校验虚拟集群的名字是否合法。
     */
    ValidateVirtualClusterName(query: ValidateVirtualClusterNameRequest): Promise<ValidateVirtualClusterNameResponse>;
}
export default OPENANALYTICS_OPEN;
