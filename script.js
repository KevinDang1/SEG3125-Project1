const topics = {
    subjectTutoring: ["Math", "Chemistry", "History", "Writing", "Physics"],
    testPreparations: ["SAT Prep", "ACT Prep", "AP Exam Prep", "Literacy Test", "College Entrance Exam"],
    languageTutoring: ["English", "Spanish", "French", "German", "Chinese"],
    specialProgram: ["Group Tutoring", "Online Tutoring", "Home School Tutoring","High-School Tutoring", "Summer School Tutoring"]
};

function updateTopics() {
    const typeOfService = document.getElementById('typeOfService').value;
    const topicContainer = document.getElementById('topicOfService');

    // Clear previous topics
    topicContainer.innerHTML = '';

    if (typeOfService in topics) {
        topics[typeOfService].forEach(topic => {
            const radioWrapper = document.createElement('div');
            radioWrapper.className = 'form-check form-check-inline';

            const radioInput = document.createElement('input');
            radioInput.className = 'form-check-input';
            radioInput.type = 'radio';
            radioInput.name = 'topic';
            radioInput.id = topic.toLowerCase();
            radioInput.value = topic;

            const radioLabel = document.createElement('label');
            radioLabel.className = 'form-check-label';
            radioLabel.htmlFor = topic.toLowerCase();
            radioLabel.textContent = topic;

            radioWrapper.appendChild(radioInput);
            radioWrapper.appendChild(radioLabel);
            topicContainer.appendChild(radioWrapper);
        });
    }
}

document.getElementById('increase-duration').addEventListener('click', function() {
    let duration = parseInt(document.getElementById('duration').value);
    document.getElementById('duration').value = duration + 1;
});

document.getElementById('decrease-duration').addEventListener('click', function() {
    let duration = parseInt(document.getElementById('duration').value);
    if (duration > 0) {
        document.getElementById('duration').value = duration - 1;
    }
});
