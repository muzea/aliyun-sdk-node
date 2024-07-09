import { StopHpoExperimentRequest } from "./StopHpoExperiment/req";
import { StopHpoExperimentResponse } from "./StopHpoExperiment/res";
import { GetHpoExperimentRequest } from "./GetHpoExperiment/req";
import { GetHpoExperimentResponse } from "./GetHpoExperiment/res";
import { CreateHpoExperimentRequest } from "./CreateHpoExperiment/req";
import { CreateHpoExperimentResponse } from "./CreateHpoExperiment/res";
import { StopHpoTrialsRequest } from "./StopHpoTrials/req";
import { StopHpoTrialsResponse } from "./StopHpoTrials/res";
import { RestartHpoTrialsRequest } from "./RestartHpoTrials/req";
import { RestartHpoTrialsResponse } from "./RestartHpoTrials/res";
import { ListHpoTrialLogNamesRequest } from "./ListHpoTrialLogNames/req";
import { ListHpoTrialLogNamesResponse } from "./ListHpoTrialLogNames/res";
import { ListHpoTrialCommandsRequest } from "./ListHpoTrialCommands/req";
import { ListHpoTrialCommandsResponse } from "./ListHpoTrialCommands/res";
import { ListHpoExperimentsRequest } from "./ListHpoExperiments/req";
import { ListHpoExperimentsResponse } from "./ListHpoExperiments/res";
import { ListHpoTrialsRequest } from "./ListHpoTrials/req";
import { ListHpoTrialsResponse } from "./ListHpoTrials/res";
import { GetHpoTrialRequest } from "./GetHpoTrial/req";
import { GetHpoTrialResponse } from "./GetHpoTrial/res";
import { UpdateHpoExperimentRequest } from "./UpdateHpoExperiment/req";
import { UpdateHpoExperimentResponse } from "./UpdateHpoExperiment/res";
import { ListHpoExperimentLogsRequest } from "./ListHpoExperimentLogs/req";
import { ListHpoExperimentLogsResponse } from "./ListHpoExperimentLogs/res";
import { ListHpoTrialLogsRequest } from "./ListHpoTrialLogs/req";
import { ListHpoTrialLogsResponse } from "./ListHpoTrialLogs/res";
import { DeleteHpoExperimentRequest } from "./DeleteHpoExperiment/req";
import { DeleteHpoExperimentResponse } from "./DeleteHpoExperiment/res";

interface PAIAUTOML {
    /**
     * 完全停止一个指定的AutoML HPO实验，包括停止该实验所属的trials，和这些trials所依赖的后台任务。
     */
    StopHpoExperiment(query: StopHpoExperimentRequest): Promise<StopHpoExperimentResponse>;
    /**
     * 获取一个HPO实验的信息，包括状态、配置、以及所属trials的状态等数据。
     */
    GetHpoExperiment(query: GetHpoExperimentRequest): Promise<GetHpoExperimentResponse>;
    /**
     * 提交实验配置信息，创建一个HPO实验。
     */
    CreateHpoExperiment(query: CreateHpoExperimentRequest): Promise<CreateHpoExperimentResponse>;
    /**
     * 停止一个HPO实验里指定的trials，以及这些trials对应的后台任务。
     */
    StopHpoTrials(query: StopHpoTrialsRequest): Promise<StopHpoTrialsResponse>;
    /**
     * 重启一个HPO实验里失败的trials。对于指定的trial，提取它使用的超参配置。如果该实验所有使用这个配置的trials都没有成功过，那么用这个配置重新启动一个trial。
     */
    RestartHpoTrials(query: RestartHpoTrialsRequest): Promise<RestartHpoTrialsResponse>;
    /**
     * 返回指定的HPO实验里指定的trial所拥有的所有的log文件的名称。
     */
    ListHpoTrialLogNames(query: ListHpoTrialLogNamesRequest): Promise<ListHpoTrialLogNamesResponse>;
    /**
     * HPO一个trial会按配置里的命令集，顺序运行一个或多个后台命令。这些命令在执行时的输出可以通过这个API返回。
     */
    ListHpoTrialCommands(query: ListHpoTrialCommandsRequest): Promise<ListHpoTrialCommandsResponse>;
    /**
     * 查询符合条件的HPO实验信息
     */
    ListHpoExperiments(query: ListHpoExperimentsRequest): Promise<ListHpoExperimentsResponse>;
    /**
     * 返回指定实验id的trial
     */
    ListHpoTrials(query: ListHpoTrialsRequest): Promise<ListHpoTrialsResponse>;
    /**
     * 获取一个HPO实验里一个指定Trial的信息
     */
    GetHpoTrial(query: GetHpoTrialRequest): Promise<GetHpoTrialResponse>;
    /**
     * 更新一个正在运行中的HPO实验的设置。更新成功后，该实验将按照新的设置继续执行。
     */
    UpdateHpoExperiment(query: UpdateHpoExperimentRequest): Promise<UpdateHpoExperimentResponse>;
    /**
     * 显示一个HPO实验指定log的内容。
     */
    ListHpoExperimentLogs(query: ListHpoExperimentLogsRequest): Promise<ListHpoExperimentLogsResponse>;
    /**
     * 分页显示一个hpo trial的一个指定日治的内容
     */
    ListHpoTrialLogs(query: ListHpoTrialLogsRequest): Promise<ListHpoTrialLogsResponse>;
    /**
     * 删除一个HPO实验。删除后，实验和它的trials数据都不会再通过Get/List API返回。
     */
    DeleteHpoExperiment(query: DeleteHpoExperimentRequest): Promise<DeleteHpoExperimentResponse>;
}
export default PAIAUTOML;
