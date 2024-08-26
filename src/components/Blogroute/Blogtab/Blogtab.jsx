import * as React from "react";
import { Tabs as BaseTabs, Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList, TabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel, TabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, Tab, tabClasses } from "@mui/base/Tab";
import TrendingArticles from "../TrendingArticles/TrendingArticles";
import { ChevronRight } from "lucide-react";

export default function UnstyledTabsVertical() {
  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <Tabs defaultValue={0} orientation="vertical">
            <div className="flex gap-10">
            <TabsList className="w-[110%] h-[100%] flex flex-col gap-5 py-7 bg-[#F3F3F6] rounded-lg">
              <Tab className="flex justify-between bg-[#06854D] px-2 py-2 font-[poppins] text-[14px] items-center text-white font-medium">Trending Articles <ChevronRight size={16}></ChevronRight></Tab>
              <Tab className="flex justify-between  px-2 py-2 font-[poppins] text-[14px] items-center text-[#707070] font-medium ">AI & ML <ChevronRight size={16}></ChevronRight></Tab>
              <Tab className="flex justify-between  px-2 py-2 font-[poppins] text-[14px] items-center text-[#707070] font-medium ">Block Chain <ChevronRight size={16}></ChevronRight></Tab>
              <Tab className="flex justify-between  px-2 py-2 font-[poppins] text-[14px] items-center text-[#707070] font-medium  ">CLoud Computing <ChevronRight size={16}></ChevronRight></Tab>
              <Tab className="flex justify-between  px-2 py-2 font-[poppins] text-[14px] items-center text-[#707070] font-medium ">Cyber Security <ChevronRight size={16}></ChevronRight></Tab>
              <Tab className="flex justify-between  px-2 py-2 font-[poppins] text-[14px] items-center text-[#707070] font-medium ">Data Science <ChevronRight size={16}></ChevronRight></Tab>
            </TabsList>
            <TabPanel value={0}>
              <TrendingArticles></TrendingArticles>
            </TabPanel>
            <TabPanel value={1}><TrendingArticles></TrendingArticles></TabPanel>
            <TabPanel value={2}><TrendingArticles></TrendingArticles></TabPanel>
            </div>
            
          </Tabs>
        </div>
      </div>
    </>
  );
}


