import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";
import { Link } from "@nextui-org/react";

type Props = {};

type TimeLineData = {
  date: string;
  company: string;
  subtitle: string;
  bullets: Array<string>;
  url: string;
};

function Experience({}: Props) {
  const items: Array<TimeLineData> = [
    {
      date: "January 1st, 2023",
      company: "",
      url: "",
      subtitle:
        "FullStack Developer",
      bullets: ["I learned nest", "I learned nest"],
    }
  ];

  return (
    <div id="experience">
      <Element name="experience">
        <Timeline position="right">
          {items.map((element, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "end",
                  }}
                  className="p-1 md:p-5"
                >
                  <span className="text-[10px] sm:text-sm md:text-normal">
                    {element.date} -{" "}
                    <Link
                      href={element.url}
                      target="_blank"
                      isExternal
                      showAnchorIcon
                      className="text-[10px] sm:text-sm md:text-normal"
                    >
                      {element.company}
                    </Link>
                  </span>
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ minHeight: "150px" }}>
                  <TimelineConnector />
                  <TimelineDot color="inherit" variant="outlined">
                    <LaptopMacIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    py: "12px",
                    px: 2,
                  }}
                  className="w-1/2 p-1 md:p-5"
                >
                  <Typography className="text-[10px] sm:text-sm md:text-normal w-full md:w-2/3">
                    {element.subtitle}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Element>
    </div>
  );
}

export { Experience };
