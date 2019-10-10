import { CreateComputeTaskRequest } from "./CreateComputeTask/req";
import { CreateComputeTaskResponse } from "./CreateComputeTask/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { DescribeComputeTasksRequest } from "./DescribeComputeTasks/req";
import { DescribeComputeTasksResponse } from "./DescribeComputeTasks/res";
import { DescribeDevicesRequest } from "./DescribeDevices/req";
import { DescribeDevicesResponse } from "./DescribeDevices/res";
import { DescribeProjectsRequest } from "./DescribeProjects/req";
import { DescribeProjectsResponse } from "./DescribeProjects/res";
import { GetPictureSearchResultsRequest } from "./GetPictureSearchResults/req";
import { GetPictureSearchResultsResponse } from "./GetPictureSearchResults/res";
import { ImportDevicesRequest } from "./ImportDevices/req";
import { ImportDevicesResponse } from "./ImportDevices/res";

interface VCS {
    CreateComputeTask(query: CreateComputeTaskRequest): Promise<CreateComputeTaskResponse>;
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    DescribeComputeTasks(query: DescribeComputeTasksRequest): Promise<DescribeComputeTasksResponse>;
    DescribeDevices(query: DescribeDevicesRequest): Promise<DescribeDevicesResponse>;
    DescribeProjects(query: DescribeProjectsRequest): Promise<DescribeProjectsResponse>;
    GetPictureSearchResults(query: GetPictureSearchResultsRequest): Promise<GetPictureSearchResultsResponse>;
    ImportDevices(query: ImportDevicesRequest): Promise<ImportDevicesResponse>;
}
export default VCS;
