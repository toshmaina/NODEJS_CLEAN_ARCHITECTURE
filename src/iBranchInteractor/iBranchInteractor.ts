
export interface  BranchPayload {
name: string;
id: number;
code: string;
phoneNumber: string;
location: string;
}

export interface BranchesDescription{
    pageSize: number,
    pageNum: number,
    orderByColumn: string,
    isAsc: string
  }
export interface IBranchInteractor{
    createBranch(branchPayload:BranchPayload);
    getBranches(branchesDescriptions:BranchesDescription);
    updateBranch(branchPayload:BranchPayload);
    deleteBranch(id:BranchPayload["id"])
}